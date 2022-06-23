import { Route, Routes } from 'react-router-dom';
import ArticleDetail from './components/ArticleDetail';
import Container from './App.styled';
import ArticleSummary from './components/ArticleSummary';
import ArticleState from './context/Article/ArticleState';

const App = () => {
  return (
    <ArticleState>
      <Container>
        <Routes>
          <Route path="/" element={<ArticleSummary />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </Container>
    </ArticleState>
  );
};

export default App;
