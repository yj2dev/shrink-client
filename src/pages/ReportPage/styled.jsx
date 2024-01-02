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
`;

export const ReportWriteSection = styled.section`
  //border: 1px dashed hotpink;
  display: flex;
  flex-direction: column;
`;
