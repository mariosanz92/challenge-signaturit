import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleContext from '../../context/Article/ArticleContext';
import GenericButton from '../GenericButton';
import Label from '../Label';
import { Container, Title, Content } from './Article.styled';

type ArticleProps = {
  title: string;
  type: string;
  id: string;
};

const Article = ({ title, type, id }: ArticleProps) => {
  const navigate = useNavigate();
  const { setArticleDetail } = useContext(ArticleContext);

  const getLabelColor = (type: string) => {
    switch (type) {
      case 'Simple':
        return '#ADD8E6';
      case 'Custom':
        return '#90EE90';
      case 'Advanced':
        return '#FAFAD2';
    }
  };

  const goToDetail = () => {
    navigate(`/article/${id}`);
    setArticleDetail(id);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <Label text={`Type: ${type}`} color={getLabelColor(type)} />
        <GenericButton handleClick={goToDetail} text="Go to detail" />
      </Content>
    </Container>
  );
};

export default Article;
