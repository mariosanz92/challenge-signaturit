import { Container, Title, Close } from './Modal.styled';

type ModalProps = {
  children: JSX.Element;
  title: string;
  onClose?: () => void;
};

const Modal = ({ title, children, onClose }: ModalProps) => {
  return (
    <Container>
      {onClose && <Close onClick={onClose}>&#215;</Close>}
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default Modal;
