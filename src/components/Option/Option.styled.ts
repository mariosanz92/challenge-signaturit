import styled from 'styled-components';
import device from '../../breakpoints';

export const TextType = styled.span`
  font-family: 'Lato', sans-serif;
`;

export const Options = styled.div`
  display: flex;
  column-gap: 0.2rem;
  @media ${device.tablet} {
    column-gap: 5rem;
  }
`;

export const Type = styled.div`
  position: relative;
  float: left;
`;
export const Content = styled.div`
  width: auto;
  padding: 0 1rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.3rem solid #cdcdcd;
  border-radius: 0.5rem;
  line-height: 25px;
  transition: 0.5s ease;
`;

export const Checkbox = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  &:hover + ${Content} {
    background-color: #cdcdcd;
  }
  &:checked + ${Content} {
    background-color: #cdcdcd;
  }
`;

export const Text = styled.span`
  font-family: 'Lato', sans-serif;
`;
