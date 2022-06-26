import ArticleContext from '../../context/Article/ArticleContext';
import { useContext, useEffect, useState } from 'react';
import Article from '../Article';
import Container from './ArticleList.styled';
import { IArticle } from '../../interfaces/IArticle';
import Pagination from '../Pagination';
import usePagination from './usePagination';

const ArticleList = () => {
  const { articles, filtered } = useContext(ArticleContext);
  const [articlesList, setArticleList] = useState<IArticle[]>(articles);
  const { selectedType } = useContext(ArticleContext);

  const { currentArticles, pageNumbers, paginate, currentPage, setCurrentPage } = usePagination(articlesList);

  useEffect(() => {
    if (filtered) {
      setArticleList(filtered);
    } else {
      setArticleList(articles);
    }
  }, [filtered, articlesList, articles]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType]);

  return (
    <Container>
      {currentArticles.map(({ title, type, id }) => (
        <Article key={id} title={title} type={type} id={id} />
      ))}
      {pageNumbers.length > 1 && <Pagination pageNumbers={pageNumbers} paginate={paginate} currentPage={currentPage} />}
    </Container>
  );
};

export default ArticleList;
