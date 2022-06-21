import Label from '../Label';
import { Container, Title } from './Article.styled';

type ArticleProps = {
  title: string;
  type: string;
};

const Article = ({ title, type }: ArticleProps) => {
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

  return (
    <Container>
      <Title>{title}</Title>
      <Label text={`Type: ${type}`} color={getLabelColor(type)} />
    </Container>
  );
};

export default Article;
