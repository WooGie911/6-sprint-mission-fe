import React from "react";
import styled from "styled-components";
import SafeImage from "../../ItemDetailPage/components/SafeImage";
import { Product } from "../../../../types";
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/ic_heart.svg";

const StyledSafeImage = styled(SafeImage)`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 16px;
`;

const ItemCardWrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray[800]};
  overflow: hidden;
  cursor: pointer;
`;

const ItemSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
`;

const ItemName = styled.h2`
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const FavoriteCount = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 12px;
`;

interface ItemCardProps {
  item: Product;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <ItemCardWrapper>
      <StyledSafeImage
        src={item.images[0]}
        alt={`${item.name} 상품 대표 사진`}
      />
      <ItemSummary>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
        <FavoriteCount>
          <HeartIcon />
          {item.favoriteCount}
        </FavoriteCount>
      </ItemSummary>
    </ItemCardWrapper>
  );
};

export default ItemCard;
