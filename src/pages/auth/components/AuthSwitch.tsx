import styled from "styled-components";

const AuthSwitch = styled.div`
  font-weight: 500;
  font-size: 15px;
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.primary[100]};
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

export default AuthSwitch;
