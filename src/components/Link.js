import { Link as RouterLink } from "react-router-dom";

import styled from "styled-components";

const Link = styled(RouterLink)`
  color: ${(props) => (props.active ? "#927a7a" : "#7d6060")};
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 1rem;
  text-decoration: none;

  &:hover {
    color: #927a7a;
  }
`;

export default Link;
