import styled from "styled-components";

export const LogoHomeLink = styled.a`
  display: block;
  margin-bottom: 24px;
  text-align: center;

  img {
    width: 198px;
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    margin-bottom: 40px;

    image {
      width: 396px;
    }
  }
`;

export default LogoHomeLink;
