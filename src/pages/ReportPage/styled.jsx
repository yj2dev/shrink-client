import styled from "styled-components";
export const ProductNameListSection = styled.section`
  position: absolute;
  width: calc(100% - 2px);
  top: 100px;
  padding: 12px 0;

  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  z-index: 1;

  display: none;

  &.active {
    display: block;
    ul {
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        padding: 3px 20px;
        margin: 0;

        button.product-name-btn {
          width: 100%;
          margin: 0;
          padding: 0;
          font-size: 1em;
          background-color: transparent;
          border: none;
          box-shadow: none;
          display: flex;
          justify-content: flex-start;
          font-weight: 400;
          color: #000;

          &:hover {
            margin: 0;
            padding: 0;
            top: 0;
            box-shadow: none;
          }
        }

        &:hover {
          background-color: #eeeeee;
        }
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  align-items: center;
  width: 100%;

  .report-wrapper {
    min-width: 600px;

    @media (max-width: 768px) {
      min-width: 350px;
    }

    max-width: 700px;
  }

  section.report-write {
  }
  .report-write-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 64px;
    border-radius: 8px;
    font-size: 1.5em;

    cursor: pointer;
    transition: 0.2s;
    background-color: #f6f8fa;

    box-shadow: 4px 4px 8px 1px rgba(0, 0, 0, 0.2);

    color: #3f5dfe;
    font-weight: 800;

    border: none;
    outline: none;

    &:hover {
      background-color: #3f5dfe;
      color: #fff;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
      position: relative;
      top: 2px;
    }

    &.active {
      background-color: #3f5dfe;
      color: #fff;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
      position: relative;
      top: 2px;
    }
  }
`;

export const ReportWriteSection = styled.section`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 12px 0 24px 0;
  border: none;

  height: 0;
  transition: 0.2s;

  &.active {
    border-style: dashed;
    border-color: #3f5dfe;
    height: 870px;

    &.active-file {
      height: 1000px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    //max-width: 500px;
    width: 100%;
    box-sizing: border-box;

    margin: 0 auto;
    padding: 40px 40px;

    label {
      font-size: 1.2em;
      position: relative;
    }

    label > span.require-label {
      color: red;
      font-size: 1.5em;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    .weight-wrapper {
      display: flex;
      flex-direction: row;
      gap: 10px;

      input {
        width: 100px;
      }

      .weight-item {
        display: flex;
        flex-direction: column;
      }
    }

    .price-input {
      width: 50%;
    }

    input,
    select,
    textarea,
    button {
      font-size: 1.2em;
      resize: none;
      margin-bottom: 1.2em;
      //box-sizing: border-box;
      padding: 10px 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-family: "Noto Sans KR", sans-serif;
      outline: none;
      transition: 0.2s;
    }

    textarea {
      height: 120px;
    }

    input:focus {
      border-color: #3f5dfe;
    }

    select:focus {
      border-color: #3f5dfe;
    }

    textarea:focus {
      border-color: #3f5dfe;
    }
    //input,
    //select,
    //textarea,
    //button:focus {
    //  border-color: #3f5dfe;
    //}

    button[type="submit"] {
      margin-top: 20px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      border-radius: 8px;
      //height: 64px;
      font-size: 1.2em;

      cursor: pointer;
      transition: 0.2s;
      background-color: #f6f8fa;

      box-shadow: 4px 4px 8px 1px rgba(0, 0, 0, 0.2);

      color: #2245fd;
      font-weight: 800;

      border: none;
      outline: none;

      &:hover {
        background-color: #2245fd;
        color: #fff;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
        position: relative;
        top: 2px;
      }
    }

    label {
      margin-bottom: 5px;
      font-weight: bold;
    }
  }
`;

export const InputHidden = styled.input`
  display: none;
`;

export const InputLabel = styled.label`
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  flex-direction: column;
  width: 100%;
  height: 6em;
  border-radius: 8px;
  //border: 2px dashed #6c82f3;
  border: 2px dashed #bcbcbc;
  color: #bcbcbc;
  //color: #2245fd;
  transition: 0.1s;

  &:hover {
    background-color: rgba(108, 130, 243, 0.1);
    border: 2px dashed #6c82f3;
    color: #6c82f3;
  }

  &.drag {
    background-color: rgba(108, 130, 243, 0.2);
    border: 2px dashed #4f68ea;
    color: #4f68ea;
  }

  &.active {
    background-color: rgba(108, 130, 243, 0.2);
    border: 2px dashed #4f68ea;
    color: #4f68ea;
  }

  //font-size: 16px;
  //cursor: pointer;
  //border-radius: 8px;
  //font-weight: 800;
  //margin-bottom: 20px;
  ////border: none;
  ////background-color: #ff5058;
  ////color: #ffffff;
  //
  //border: 2px solid rgba(63, 93, 254, 0.5);
  //color: rgba(63, 93, 254, 0.5);
  //transition: 0.2s;
  //
  //&.active {
  //  background-color: #aab4fe;
  //  border: 2px solid #aab4fe;
  //  color: #ffffff;
  //  height: 50px;
  //}
  //
  //&.drag {
  //  background-color: #aab4fe;
  //  border: 2px solid #aab4fe;
  //  color: #ffffff;
  //}
  //
  //&:not(.active):hover {
  //  border: 2px solid rgba(63, 93, 254, 1);
  //  color: rgba(63, 93, 254, 1);
  //}
`;
