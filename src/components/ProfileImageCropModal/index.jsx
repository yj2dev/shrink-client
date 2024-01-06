import React, { useState, useRef } from "react";

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  convertToPixelCrop,
} from "react-image-crop";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDebounceEffect";

import "react-image-crop/dist/ReactCrop.css";
import Modal from "../Modal";

import { Container, InputHidden, InputLabel } from "./styled";
import { IoImageOutline } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "px",
        width: 180,
        height: 180,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  );
}

const ProfileImageCropModal = ({ show, close, initUserInfo }) => {
  const navigate = useNavigate();

  const [isDrag, setIsDrag] = useState(false);

  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef(null);
  const imgRef = useRef(null);
  const hiddenAnchorRef = useRef(null);
  const blobUrlRef = useRef("");
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState(1 / 1);

  function onSelectFile(e) {
    let files =
      e.target.files || (e.dataTransfer ? e.dataTransfer.files : null);
    if (files && files.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || ""),
      );
      reader.readAsDataURL(files[0]);
    }
  }

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        );
      }
    },
    100,
    [completedCrop, scale, rotate],
  );

  async function onClickUploadImage() {
    if (!imgRef.current || !completedCrop) {
      console.error("업로드 조건이 충족되지 않았습니다.");
      return;
    }

    try {
      const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
      const scaleY = imgRef.current.naturalHeight / imgRef.current.height;

      const offscreen = new OffscreenCanvas(
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
      );
      const ctx = offscreen.getContext("2d");
      if (!ctx) {
        throw new Error("2D 컨텍스트가 없음");
      }

      ctx.drawImage(
        imgRef.current,
        completedCrop.x * scaleX,
        completedCrop.y * scaleY,
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
        0,
        0,
        offscreen.width,
        offscreen.height,
      );

      const blob = await offscreen.convertToBlob({
        type: "image/png",
      });

      const formData = new FormData();
      formData.append("image", blob);

      axios
        .patch("/api/auth/user/profile-image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          initUserInfo();
          handleClose();
        })
        .catch((err) => {});
    } catch (error) {}
  }

  const onDragEnter = (e) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDrag(false);
    onSelectFile(e);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const handleClose = () => {
    setImgSrc("");
    setCrop(undefined);
    setCompletedCrop(undefined);
    setScale(1);
    setRotate(0);
    setAspect(1 / 1);
    close();
  };

  return (
    <Modal
      show={show}
      onClose={handleClose}
      showCloseBtn={false}
      onCloseOutside={false}
    >
      <Container>
        <InputLabel
          htmlFor="select-image"
          onDragOver={onDragOver}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={`${isDrag ? "drag" : ""} ${imgSrc ? "active" : ""}`}
        >
          {!imgSrc && (
            <IoImageOutline style={{ fontSize: "24px", marginBottom: "8px" }} />
          )}
          이미지 선택 또는 드래그
        </InputLabel>
        <InputHidden
          type="file"
          accept="image/*"
          id="select-image"
          onChange={onSelectFile}
        />

        {!!imgSrc && (
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={aspect}
            circularCrop={true}
            minWidth={180}
            minHeight={180}
          >
            <img
              ref={imgRef}
              alt="Crop me"
              src={imgSrc}
              style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
              onLoad={onImageLoad}
            />
          </ReactCrop>
        )}

        <section className="btn">
          <button
            className={`submit ${completedCrop ? "active" : ""}`}
            disabled={!imgRef.current || !completedCrop}
            onClick={onClickUploadImage}
          >
            변경
          </button>
          <button
            className={`cancel ${
              !imgRef.current || !completedCrop ? "" : "active"
            }`}
            onClick={handleClose}
          >
            취소
          </button>
        </section>
      </Container>
    </Modal>
  );
};

export default ProfileImageCropModal;
