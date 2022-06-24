import { useContext, useState } from 'react';
import ArticleContext from '../../context/Article/ArticleContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { Container, Title, Text, Image, GenericButtonDelete, GenericButtonBack } from './ArticleDetail.styled';
import DeleteArticle from '../DeleteArticle';

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
          <GenericButtonDelete text="Delete Article" handleClick={() => setShowModal(!showModal)} color="#F08080" />
          <GenericButtonBack text="Back to summary" handleClick={() => navigate(`/`)} />
          {showModal && <DeleteArticle setShowModal={setShowModal} removeArticle={removeArticle} />}
        </Container>
      )}
    </>
  );
};

export default ArticleDetail;
