import styled from "react-emotion";

const Links = styled("a")`
  color: pink;
  text-decoration: none;
  
  font-size: ${props => props.fontSize || `1.5rem` };
`;

export default Links;
