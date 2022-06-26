import { useEffect, useState } from 'react';
import { IArticle } from '../../interfaces/IArticle';

const usePagination = (articlesList: IArticle[]) => {
  const ARTICLE_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastArticle = currentPage * ARTICLE_PER_PAGE;
  const indexOfFisrtArticle = indexOfLastArticle - ARTICLE_PER_PAGE;
  const currentArticles = articlesList.slice(indexOfFisrtArticle, indexOfLastArticle);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const numberOfPages = Math.ceil(articlesList.length / ARTICLE_PER_PAGE);
    const listOfNumbers = Array.from(Array(numberOfPages), (_, index) => index + 1);
    setPageNumbers(listOfNumbers);
  }, [articlesList]);

  return { currentArticles, pageNumbers, paginate, currentPage, setCurrentPage };
};

export default usePagination;
