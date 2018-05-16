import styled from "react-emotion";

const Span = styled('span')(
  {
    fontSize: `1.2em`
  },
  props => ({ color: props.color|| 'hotpink' })
);

export default Span;
