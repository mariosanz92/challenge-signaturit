import { Container, Content } from './ArticleSummary.styled';
import ArticleList from '../../components/ArticleList';
import Filter from '../../components/Filter';
import GenericButton from '../GenericButton';
import { useState } from 'react';
import Modal from '../Modal';
import Form from '../Form';

const ArticleSummary = () => {
  const [showAddArticle, setShowAddArticle] = useState<Boolean>(false);

  return (
    <Container>
      {showAddArticle && (
        <Modal title="Add an Article:" onClose={() => setShowAddArticle(!showAddArticle)}>
          <Form types={['Simple', 'Custom', 'Advanced']} onSubmit={() => setShowAddArticle(!showAddArticle)} />
        </Modal>
      )}
      <Content>
        <GenericButton handleClick={() => setShowAddArticle(!showAddArticle)} text="Add Article" />
        <Filter />
      </Content>
      <ArticleList />
    </Container>
  );
};

export default ArticleSummary;
