import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PageContainer from "../ItemPage/components/PageContainer";
import ItemProfileSection from "./components/ItemProfileSection";
import ItemCommentSection from "./components/ItemCommentSection";
import LinkButton from "../../components/LinkButton";
import LineDivider from "../../components/LineDivider";
import { ReactComponent as BackIcon } from "../../assets/images/icons/ic_back.svg";

const BackToMarketPageLink = styled(LinkButton)<{ $pill?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  margin: 0 auto;
`;

const ItemDetailPage: React.FC = () => {
  const { itemId: productId } = useParams<{ itemId: string }>();

  if (!productId) return null;

  return (
    <PageContainer>
      <ItemProfileSection productId={productId} />
      <LineDivider />
      <ItemCommentSection productId={productId} />
      <BackToMarketPageLink $pill to="/items">
        목록으로 돌아가기
        <BackIcon />
      </BackToMarketPageLink>
    </PageContainer>
  );
};

export default ItemDetailPage;
