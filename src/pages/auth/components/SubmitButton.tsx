import styled from "styled-components";
import Button from "../../../components/Button";

const SubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary[100]};
  color: ${({ theme }) => theme.colors.white};
  padding: 14.5px 33.5px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[200]};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.primary[300]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    cursor: default;
  }
`;

export default SubmitButton;
