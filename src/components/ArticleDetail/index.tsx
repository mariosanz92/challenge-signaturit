import { useContext, useState } from 'react';
import ArticleContext from '../../context/Article/ArticleContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { Container, Title, Text, Image, GenericButtonStyled, Content } from './ArticleDetail.styled';
import Modal from '../Modal';
import GenericButton from '../GenericButton';

const ArticleDetail = () => {
  const { selectedArticle, deleteArticle } = useContext(ArticleContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const removeArticle = () => {
    deleteArticle(selectedArticle.id);
    navigate(`/`);
  };

  return (
    <>
      {!selectedArticle ? (
        <Navigate to="/" />
      ) : (
        <Container>
          <Title>{selectedArticle.title}</Title>
          <Text>{selectedArticle.text}</Text>
          {selectedArticle.image && <Image src={selectedArticle.image} />}
          <GenericButtonStyled text="Delete Article" handleClick={() => setShowModal(!showModal)} color="#F08080" />
          {showModal && (
            <Modal title="Are you sure to delete this article?" onClose={() => setShowModal(false)}>
              <Content>
                <GenericButton text="Delete Article" handleClick={removeArticle} />
                <GenericButton text="Cancel" handleClick={() => setShowModal(false)} />
              </Content>
            </Modal>
          )}
        </Container>
      )}
    </>
  );
};

export default ArticleDetail;
