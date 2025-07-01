import React from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../assets/images/icons/arrow_left.svg";
import { ReactComponent as RightArrow } from "../assets/images/icons/arrow_right.svg";

const PaginationBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const PaginationButton = styled.button<{ $active?: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.gray[500])};
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary[100] : "transparent"};

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

interface PaginationBarProps {
  totalPageNum: number;
  activePageNum: number;
  onPageChange: (page: number) => void;
}

const PaginationBar: React.FC<PaginationBarProps> = ({
  totalPageNum,
  activePageNum,
  onPageChange,
}) => {
  const maxVisiblePages = 5;
  let startPage: number;

  if (totalPageNum <= maxVisiblePages) {
    startPage = 1;
  } else {
    startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1);
    startPage = Math.min(startPage, totalPageNum - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: Math.min(maxVisiblePages, totalPageNum - startPage + 1) },
    (_, i) => startPage + i
  );

  return (
    <PaginationBarWrapper>
      <PaginationButton
        disabled={activePageNum === 1}
        onClick={() => onPageChange(activePageNum - 1)}
      >
        <LeftArrow />
      </PaginationButton>
      {pages.map((page) => (
        <PaginationButton
          key={page}
          $active={activePageNum === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PaginationButton>
      ))}
      <PaginationButton
        disabled={activePageNum === totalPageNum}
        onClick={() => onPageChange(activePageNum + 1)}
      >
        <RightArrow />
      </PaginationButton>
    </PaginationBarWrapper>
  );
};

export default PaginationBar;
