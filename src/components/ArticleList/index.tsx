import ArticleContext from '../../context/Article/ArticleContext';
import { useContext, useEffect, useState } from 'react';
import Article from '../Article';
import Container from './ArticleList.styled';
import IArticle from '../../interfaces/IArticle';

const ArticleList = () => {
  const { articles, filtered } = useContext(ArticleContext);
  const [articlesList, setArticleList] = useState<IArticle[]>(articles);

  useEffect(() => {
    if (filtered) {
      setArticleList(filtered);
    } else {
      setArticleList(articles);
    }
  }, [filtered, articlesList]);

  return (
    <Container>
      {articles && articlesList.map(({ title, type, id }) => <Article key={id} title={title} type={type} />)}
    </Container>
  );
};

export default ArticleList;
