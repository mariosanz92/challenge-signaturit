import ArticleContext from '../../context/Article/ArticleContext';
import { useContext, useEffect, useState } from 'react';
import Article from '../Article';
import Container from './ArticleList.styled';
import IArticle from '../../interfaces/IArticle';
import Pagination from '../Pagination';

const ArticleList = () => {
  const ARTICLE_PER_PAGE = 5;
  const { articles, filtered } = useContext(ArticleContext);
  const [articlesList, setArticleList] = useState<IArticle[]>(articles);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastArticle = currentPage * ARTICLE_PER_PAGE;
  const indexOfFisrtArticle = indexOfLastArticle - ARTICLE_PER_PAGE;
  const currentArticles = articlesList.slice(indexOfFisrtArticle, indexOfLastArticle);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (filtered) {
      setArticleList(filtered);
    } else {
      setArticleList(articles);
    }
    setCurrentPage(1);
  }, [filtered, articlesList, articles]);

  useEffect(() => {
    const numberOfPages = Math.ceil(articlesList.length / ARTICLE_PER_PAGE);
    const listOfNumbers = Array.from(Array(numberOfPages), (_, index) => index + 1);
    setPageNumbers(listOfNumbers);
  }, [articlesList]);

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
