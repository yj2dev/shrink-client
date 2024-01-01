import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;

  section.report-write {
    border: 1px dashed darkgoldenrod;
  }
`;

export const ReportWriteSection = styled.section`
  border: 1px dashed hotpink;
  display: flex;
  flex-direction: column;
`;

export const ReportListSection = styled.section`
  border: 1px dashed darkgoldenrod;

  .item {
    border: 1px dashed orangered;
  }
`;
