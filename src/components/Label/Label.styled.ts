import styled from 'styled-components';

const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lato', sans-serif;
  background-color: ${(props) => props.color || '#E0FFFF'};
  border-radius: 2rem;
  width: 8rem;
  height: 2rem;
`;

export default Container;
