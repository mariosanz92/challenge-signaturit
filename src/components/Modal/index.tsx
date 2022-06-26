import { useRef } from 'react';
import useOnClickOutside from '../../useOnClickOutside';
import { Container, Title, Close } from './Modal.styled';

type ModalProps = {
  children: JSX.Element;
  title: string;
  onClose: () => void;
};

const Modal = ({ title, children, onClose }: ModalProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, () => onClose());

  return (
    <Container ref={ref}>
      <Close onClick={onClose}>&#215;</Close>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default Modal;
