import styled from 'styled-components';

const Button = styled.button<{ color: string }>`
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: ${(props) => props.color};
  height: 2rem;
  padding: 0 2rem;
  font-family: 'Lato', sans-serif;
  border: none;
`;

export default Button;
