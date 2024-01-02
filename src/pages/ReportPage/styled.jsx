import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;

  background: rgba(132, 153, 248, 0.38);
  width: 100%;

  section.report-write {
    border: 1px dashed darkgoldenrod;
  }
`;

export const ReportWriteSection = styled.section`
  border: 1px dashed hotpink;
  display: flex;
  flex-direction: column;
`;
