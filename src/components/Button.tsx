import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Spinner } from "../assets/images/ui/spinner.svg";

export const buttonStyle = css<{
  $pill?: boolean;
  $appearance?: "primary" | "secondary";
}>`
  background-color: ${({ theme }) => theme.colors.primary[100]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ $pill }) => ($pill ? "999px" : "8px")};
  padding: 14px 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[200]};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.primary[300]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    cursor: default;
    pointer-events: none;
  }

  ${({ $appearance = "primary", theme }) =>
    $appearance === "secondary" &&
    css`
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.primary[100]};
      color: ${theme.colors.primary[100]};

      &:focus,
      &:hover,
      &:disabled {
        color: ${theme.colors.white};
      }
    `}
`;

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  isLoading,
  children,
  onClick,
  ...props
}) => {
  return (
    <button onClick={onClick} {...props}>
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

const Button = styled(BaseButton)<{
  $pill?: boolean;
  $appearance?: "primary" | "secondary";
}>`
  ${buttonStyle}
`;

export default Button;
