import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 1200px;
  padding: 24px 16px;
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 16px 24px;
  }

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 16px;
  }
`;

export default PageContainer;
