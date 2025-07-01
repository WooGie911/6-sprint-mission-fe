import React from 'react';
import styled, { css } from "styled-components";
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/ic_heart.svg";

const PillButton = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 16px;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};

  ${({ theme }) => css`
    &:hover svg {
      color: ${theme.colors.red};
    }
  `}
`;

interface StyledHeartIconProps {
  $active: boolean;
}

const StyledHeartIcon = styled(HeartIcon)<StyledHeartIconProps>`
  width: 24px;
  height: 24px;

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.colors.red};
    `}
`;

interface LikeButtonProps {
  isFavorite: boolean;
  favoriteCount: number;
  onClick: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ isFavorite, favoriteCount, onClick }) => {
  return (
    <PillButton onClick={onClick}>
      <StyledHeartIcon $active={isFavorite} />
      {favoriteCount.toLocaleString()}
    </PillButton>
  );
}

export default LikeButton;
