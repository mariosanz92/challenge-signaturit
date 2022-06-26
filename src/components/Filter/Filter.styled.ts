import styled from 'styled-components';

export const Dropdown = styled.div`
  justify-self: end;
  width: 7rem;
  background-color: white;
`;

export const SelectedItem = styled.div`
  position: relative;
  cursor: pointer;
  border: 0.2rem solid #dcdcdc;

  user-select: none;
  font-family: 'Lato', sans-serif;
  border-radius: 0.5rem;
  padding: 0.3rem;
`;

export const Content = styled.div<{ isDropdownVisible: boolean }>`
  display: ${(props) => (props.isDropdownVisible ? 'block' : 'none')};
  position: absolute;
  animation: showFilter 0.5s;
  cursor: pointer;
  user-select: none;
  font-family: 'Lato', sans-serif;
  width: 7rem;
  box-shadow: 0.1rem 0.1rem 0.5rem #dcdcdc;
  border-radius: 0 0 0.5rem 0.5rem;
  max-height: 100%;
  @keyframes showFilter {
    from {
      max-height: 0%;
    }
    to {
      max-height: 100%;
    }
  }
`;

export const Item = styled.div`
  padding: 0.2rem;
  &:hover {
    background-color: #dcdcdc;
  }
`;

export const Arrow = styled.i`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  border: 0.1rem solid black;
  border-width: 0 0.1rem 0.1rem 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;
