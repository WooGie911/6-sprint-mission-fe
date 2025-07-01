import React, { useState } from "react";
import { Link } from "react-router-dom";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts, ProductsResponse } from "../../../api/products";
import ItemCard from "./ItemCard";
import DropdownMenu from "../../../components/DropdownMenu";
import PaginationBar from "../../../components/PaginationBar";
import { ReactComponent as SearchIcon } from "../../../assets/images/icons/ic_search.svg";
import { ReactComponent as Spinner } from "../../../assets/images/ui/spinner.svg";
import styled from "styled-components";

type OrderBy = "recent" | "favorite";

const PAGE_SIZE = 12;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

const StyledSpinner = styled(Spinner)`
  width: 64px;
  height: 64px;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[900]};
  font-weight: bold;
  font-size: 20px;
  line-height: normal;
`;

const ItemCardWrapper = styled(Link)`
  color: ${({ theme }) => theme.colors.gray[800]};
  overflow: hidden;
  cursor: pointer;
`;

const AllItemsContainer = styled.div`
  padding-top: 26px;
`;

const AllItemsSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:first-child {
    padding-bottom: 8px;
  }

  &:nth-child(2) {
    padding-bottom: 16px;
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 12px;
  padding: 9px 16px;
  flex: 1;
  align-items: center;
`;

const SearchBarInput = styled.input`
  border: none;
  flex: 1;
  background-color: inherit;
  margin-left: 4px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: 16px;
  }

  &:focus {
    outline: none;
  }
`;

const AllItemsCardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 8px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 16px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 24px;
  }
`;

const PaginationBarWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 80px;
`;

const AllItemsSection: React.FC = () => {
  const [orderBy, setOrderBy] = useState<OrderBy>("recent");
  const [page, setPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");

  const { data, isFetching } = useQuery<ProductsResponse, Error>({
    queryKey: ["products", page, orderBy, keyword],
    queryFn: () =>
      getProducts({
        orderBy,
        page,
        pageSize: PAGE_SIZE,
        keyword,
      }),
    placeholderData: keepPreviousData,
    refetchInterval: 60 * 1000,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setPage(1);
  };

  return (
    <AllItemsContainer>
      <AllItemsSectionHeader>
        <SectionTitle>판매 중인 상품</SectionTitle>
        <Link to="/registration" className="loginLink button">
          상품 등록하기
        </Link>
      </AllItemsSectionHeader>

      <AllItemsSectionHeader>
        <SearchBarWrapper>
          <SearchIcon />
          <SearchBarInput
            placeholder="검색할 상품을 입력해 주세요"
            value={keyword}
            onChange={handleSearch}
          />
        </SearchBarWrapper>
        <DropdownMenu onSortSelection={setOrderBy} />
      </AllItemsSectionHeader>

      {!data && isFetching && (
        <SpinnerContainer>
          <StyledSpinner />
        </SpinnerContainer>
      )}
      {data && (
        <>
          <AllItemsCardSection>
            {data.list.map((item) => (
              <ItemCardWrapper to={`/items/${item.id}`} key={item.id}>
                <ItemCard item={item} />
              </ItemCardWrapper>
            ))}
          </AllItemsCardSection>

          <PaginationBarWrapper>
            <PaginationBar
              totalPageNum={Math.ceil(data.totalCount / PAGE_SIZE)}
              activePageNum={page}
              onPageChange={setPage}
            />
          </PaginationBarWrapper>
        </>
      )}
    </AllItemsContainer>
  );
};

export default AllItemsSection;
