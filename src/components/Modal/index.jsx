import { IoMdClose } from "react-icons/io";
import { Container } from "./styled";

const Modal = (props) => {
  if (!props.show) return null;

  const onCloseClick = (e) => {
    e.stopPropagation();
    props.onClose();
  };

  return (
    <Container onClick={onCloseClick}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <button
          style={{ marginTop:"10px" }}
          className="close-btn"
          onClick={props.onClose}>
          <IoMdClose />
        </button>
        {props.children}
      </div>
    </Container>
  );
};

export default Modal;
