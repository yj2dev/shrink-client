import { IoMdClose } from "react-icons/io";
import { Container } from "./styled";

const Modal = ({ show, onClose, onCloseOutside = true, children }) => {
  if (!show) return null;

  const onCloseClick = (e) => {
    if (onCloseOutside) {
      e.stopPropagation();
      onClose();
    }
  };

  return (
    <Container onClick={onCloseClick}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <button
          style={{ marginTop: "10px" }}
          className="close-btn"
          onClick={onClose}
        >
          <IoMdClose />
        </button>
        {children}
      </div>
    </Container>
  );
};

export default Modal;
