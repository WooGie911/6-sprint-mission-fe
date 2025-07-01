import { Link } from "react-router-dom";
import styled from "styled-components";
import { buttonStyle } from "./Button";

const LinkButton = styled(Link)<{ $pill?: boolean }>`
  ${buttonStyle}
`;

export default LinkButton;
