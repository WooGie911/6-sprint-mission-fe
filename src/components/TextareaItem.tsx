import styled from "styled-components";
import { InputItemProps, inputStyle, InputStyleProps } from "./InputItem";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import React from "react";

const Textarea = styled.textarea<InputStyleProps>`
  ${inputStyle}
  height: 200px;
  resize: none;
`;

const TextareaItem: React.FC<InputItemProps<HTMLTextAreaElement>> = ({
  id,
  label,
  error,
  register,
  ...inputProps
}) => {
  return (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Textarea
        id={id}
        $error={!!error}
        {...inputProps}
        {...(register ?? {})}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default TextareaItem;
