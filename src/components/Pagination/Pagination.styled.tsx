import styled from 'styled-components';

export const Content = styled.ul`
  display: flex;
  position: absolute;
  font-size: 1rem;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.3rem;

  bottom: 3rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 0.2rem solid #dcdcdc;
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
