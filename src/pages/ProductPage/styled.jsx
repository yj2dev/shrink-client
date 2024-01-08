import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
  gap: 1.5em;
  flex-wrap: wrap;
  margin-top: 2em;

  article {
    border-radius: 8px;
    width: 200px;
    position: relative;
    padding: 16px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .item {
      cursor: pointer;
      border-radius: 8px 8px 44px 44px;
      background-color: #fff;
      padding-bottom: 32px;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);

      img {
        width: 200px;
        height: 200px;
        box-sizing: border-box;
        border-radius: 8px 8px 0 0;
        margin-bottom: 8px;
      }

      .content {
        text-align: center;
        padding: 12px 12px 0px 12px;
        height: 60px;
      }

      .weight {
        position: absolute;
        top: 220px;
        right: 24px;
        font-size: 0.8em;
        color: #888;
      }
    }
  }
`;

export const ShrinkResult = styled.div`
  z-index: -1;
  position: relative;
  border-radius: 0 0 8px 8px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #fff;
  padding: 16px 0;
  font-size: 1.2em;

  &::before {
    content: "";
    position: absolute;
    top: -48px;
    left: 0;
    width: 50px;
    height: 50px;
    background-color: ${(props) => {
      switch (props.type) {
        case null:
          return "#FF9C08";
        case true:
          return "#ff5058";
        case false:
          return "#009432";
        default:
          return "#009432";
      }
    }};
  }

  &::after {
    content: "";
    position: absolute;
    top: -48px;
    right: 0;
    width: 50px;
    height: 50px;
    background-color: ${(props) => {
      switch (props.type) {
        case null:
          return "#FF9C08";
        case true:
          return "#ff5058";
        case false:
          return "#009432";
        default:
          return "#009432";
      }
    }};
  }

  background-color: ${(props) => {
    switch (props.type) {
      case null:
        return "#FF9C08";
      case true:
        return "#ff5058";
      case false:
        return "#009432";
      default:
        return "#009432";
    }
  }};
`;

export const NoSearchResult = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  .icon {
    color: #1f883d;
    font-size: 6em;
    width: 100%;
  }

  .back-btn {
    width: 100%;
    font-size: 1.2em;
    margin-top: 20px;
    cursor: pointer;
    padding: 15px;
    border: 1px solid #dee0e1;
    border-radius: 12px;
    background: #f6f8fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: #dee0e1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;
