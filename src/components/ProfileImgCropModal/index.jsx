import React, { useState, useEffect, useRef, useCallback } from "react";
import { Container, InputHidden, InputLabel } from "./styled";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import axios from "axios";
import Modal from "../Modal";

function ImageCrop({ history, show, close }) {
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({
    unit: "px",
    width: 50,
    height: 50,
    aspect: 1 / 1,
    x: 0,
    y: 0,
  });
  const [completedCrop, setCompletedCrop] = useState(null);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!show) {
      setUpImg("");
    }

    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );
  }, [completedCrop, show]);

  const onClickUploadImage = (canvas, crop) => {
    if (!crop || !canvas) {
      return;
    }

    canvas.toBlob(
      (file) => {
        const formData = new FormData();
        formData.append("image", file);

        axios
          .patch("/api/auth/user/profile-img", formData, {
            "Content-Type": "image/png",
          })
          .then((res) => {
            console.log("res >> ", res);
            close();
          })
          .catch((err) => {
            alert("프로필 변경에 실패했습니다.");
          });
      },
      "image/png",
      1,
    );
  };

  return (
    <Modal show={show} close={close}>
      <Container>
        <ReactCrop
          src={upImg}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={(c) => setCrop(c)}
          onComplete={(c) => setCompletedCrop(c)}
          circularCrop={true}
          minWidth={50}
          minHeight={50}
          keepSelection={true}
          style={{ marginBottom: "8px", maxWidth: "400px", maxHeight: "400px" }}
        />

        <InputLabel for="select-image">이미지 선택</InputLabel>
        <InputHidden
          type="file"
          accept="image/*"
          id="select-image"
          onChange={onSelectFile}
        />

        <canvas ref={previewCanvasRef} style={{ display: "none" }} />
      </Container>
    </Modal>
  );
}

export default ImageCrop;
