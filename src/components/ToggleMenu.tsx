import React, { useState } from "react";
import styled, { css } from "styled-components";

export interface ToggleMenuOption {
  label: string;
  value: string;
}

interface ToggleMenuProps {
  className?: string;
  children: React.ReactNode;
  options: ToggleMenuOption[];
  onSelect: (option: ToggleMenuOption) => void;
}

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
`;

const Menu = styled.ul<{ $isOpen: boolean }>`
  ${({ $isOpen }) =>
    !$isOpen &&
    css`
      display: none;
    `}
  position: absolute;
  top: 110%;
  right: 0;
  z-index: 1;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  list-style: none;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

const MenuItem = styled.li`
  font-size: 16px;
  padding: 12px 41px;
  color: ${({ theme }) => theme.colors.gray[800]};
  cursor: pointer;
`;

const ToggleMenu: React.FC<ToggleMenuProps> = ({
  className,
  children,
  options,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option: ToggleMenuOption) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <Wrapper className={className}>
      <ToggleButton type="button" onClick={() => setIsOpen((v) => !v)}>
        {children}
      </ToggleButton>
      <Menu $isOpen={isOpen}>
        {options.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleSelectOption(option)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
};

export default ToggleMenu;
