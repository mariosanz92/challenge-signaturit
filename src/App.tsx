import Container from './App.styled';
import ArticleList from './components/ArticleList';
import Filter from './components/Filter';
import ArticleState from './context/Article/ArticleState';

const App = () => {
  return (
    <ArticleState>
      <Container>
        <Filter />
        <ArticleList />
      </Container>
    </ArticleState>
  );
};

export default App;
