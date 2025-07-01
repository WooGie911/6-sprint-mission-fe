import React from "react";
import styled, { css } from "styled-components";
import { UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";

export interface InputStyleProps {
  $error?: boolean;
}

export interface InputItemProps<T = HTMLInputElement>
  extends React.InputHTMLAttributes<T> {
  id?: string;
  label?: string;
  error?: string;
  register?: UseFormRegisterReturn<any>;
}

export const inputStyle = css<InputStyleProps>`
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  outline: none;
  border: 1px solid transparent;
  ${({ $error, theme }) =>
    $error &&
    css`
      border-color: ${theme.colors.red};
    `}

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[100]};
  }
`;

export const InputField = styled.input<InputStyleProps>`
  ${inputStyle}
`;

const InputItem: React.FC<InputItemProps> = ({
  id,
  label,
  error,
  register,
  ...inputProps
}) => {
  return (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputField
        id={id}
        $error={!!error}
        {...inputProps}
        {...(register ?? {})}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default InputItem;
