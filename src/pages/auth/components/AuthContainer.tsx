import styled from "styled-components";

const AuthContainer = styled.main`
  padding: 24px 16px;
  max-width: 432px;
  margin: 0 auto;
  padding: 60px 0;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    max-width: 640px;
    padding: 48px 0;
  }
`;

export default AuthContainer;
