import styled from "styled-components";

const Error = styled.div`
  padding: 1.5em;
  font-size: 14px;
  color: white;
  background-color: red;
`;

export default function ErrorMessage({ message }) {
  return <Error>{message}</Error>;
}
