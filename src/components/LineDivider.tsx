import styled from "styled-components";

const LineDivider = styled.hr<{ $margin?: string }>`
  width: 100%;
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  margin: 16px 0;
`;

export default LineDivider;
