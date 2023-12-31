import React from "react";
import {
  Container,
  Badge,
  ButtonSection,
  Section,
  CloseButton,
} from "./styled";

import { IoMdClose, IoIosWarning } from "react-icons/io";
import { IoAlertCircleSharp } from "react-icons/io5";
import { MdDangerous } from "react-icons/md";
import { RiAlarmWarningFill } from "react-icons/ri";

/**
 * type: 0(정보)
 * type: 1(주의)
 * type: 4(위험)
 * */
const AlertModal = ({
  show,
  close,
  closeOutside = true,
  type = 0,
  customText = { confirm: "확인", cancel: "취소" },
  hidden = { close: false, confirm: false, cancel: false },
  confirm = null,
  children = null,
  title = null,
  desc = null,
}) => {
  if (!show) return null;

  const onCloseClick = (e) => {
    if (closeOutside) {
      e.stopPropagation();
      close();
    }
  };

  const getBadge = () => {
    if (type === 0) {
      return <IoAlertCircleSharp />;
    } else if (type === 1) {
      return <IoIosWarning />;
    } else if (type === 4) {
      // return <MdDangerous />;
      return <RiAlarmWarningFill />;
    }
  };

  return (
    <Container onClick={onCloseClick}>
      <Section>
        <Badge type={type}>{getBadge(type)}</Badge>
        {!hidden.close && (
          <CloseButton onClick={close}>
            <IoMdClose />
          </CloseButton>
        )}
        <article className="content" onClick={(e) => e.stopPropagation()}>
          {children}
        </article>

        <ButtonSection>
          {!hidden.confirm && (
            <button className="submit" onClick={confirm}>
              {customText.confirm}
            </button>
          )}
          {!hidden.cancel && (
            <button className="cancel" onClick={close}>
              {customText.cancel}
            </button>
          )}
        </ButtonSection>
      </Section>
    </Container>
  );
};

export default AlertModal;
