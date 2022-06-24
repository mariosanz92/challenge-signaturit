import styled from 'styled-components';
import device from '../../breakpoints';

const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lato', sans-serif;
  background-color: ${(props) => props.color || '#E0FFFF'};
  border-radius: 0.5rem;
  font-size: 0.8rem;
  width: 6rem;
  height: 2rem;

  @media ${device.tablet} {
    font-size: 1rem;
    width: 8rem;
  }
`;

export default Container;
