import styled from 'styled-components';
import device from '../../breakpoints';

export const Content = styled.ul`
  display: flex;
  justify-self: center;
  font-size: 1rem;
  border-radius: 0.5rem;
  bottom: 3rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 0.2rem solid #dcdcdc;

  @media ${device.desktop} {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
  }
`;
export const Item = styled.li<{ currentPage: boolean }>`
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  background-color: ${(props) => props.currentPage && '#dcdcdc'};

  &:hover {
    background-color: #dcdcdc;
  }
`;
