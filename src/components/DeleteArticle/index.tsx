import Modal from '../Modal';
import GenericButton from '../GenericButton';
import Content from './DeleteArticle.styled';

type DeleteArticleProps = {
  setShowModal: (value: boolean) => void;
  removeArticle: () => void;
};

const DeleteArticle = ({ setShowModal, removeArticle }: DeleteArticleProps) => {
  return (
    <Modal title="Are you sure to delete this article?" onClose={() => setShowModal(false)}>
      <Content>
        <GenericButton text="Delete Article" handleClick={removeArticle} />
        <GenericButton text="Cancel" handleClick={() => setShowModal(false)} />
      </Content>
    </Modal>
  );
};

export default DeleteArticle;
