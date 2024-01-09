// import { Link } from "react-router-dom";
import { useState } from "react";
import ContentModal from "../../components/ContentModal";
import { Container } from "./styled";


const Footer = () => {
  const [showContentModal, setShowContentModal] = useState(false);
  
  const onShowContentModal = () => {
    setShowContentModal(true);
  };
  const onCloseContentModal = () => {
    setShowContentModal(false);
  };

  return (
    <Container>
      <div className="nav-link">
        <button className="contentButton" onClick={onShowContentModal}>
          개인정보 처리방침
        </button>
        <span className="rights-text">
          Copyright 2023. KT AIVLE school 26 all rights reserved.
        </span>
      </div>
      <ContentModal
            show={showContentModal}
            onClose={onCloseContentModal}
          />
    </Container>
  );
};

export default Footer;
