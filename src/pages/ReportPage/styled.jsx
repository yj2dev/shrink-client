import styled from "styled-components";
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
    //border: 2px dashed brown;
  }

  section.report-write {
    //border: 1px dashed darkgoldenrod;
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
  transition: height 0.2s ease-in-out;

  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 12px 0 24px 0;
  border: none;

  height: 0;

  @keyframes drawBorder {
    from {
      border-width: 0;
    }
    to {
      border-width: 4px;
    }
  }

  &.active {
    height: 820px;
    animation: drawBorder 0.2s ease-in-out forwards;
    border-style: dashed;
    border-color: #3f5dfe;
  }

  form {
    display: flex;
    flex-direction: column;
    //max-width: 500px;
    width: 100%;
    box-sizing: border-box;

    margin: 0 auto;
    padding: 40px 80px;

    label {
      font-size: 1.2em;
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
        width: 138px;
      }

      .weight-item {
        display: flex;
        flex-direction: column;
      }
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
