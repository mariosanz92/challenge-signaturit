import { createContext } from 'react';
import IArticle from '../../interfaces/IArticle';

interface IContextProps {
  articles: IArticle[];
  selectedArticle: any;
  filtered: null | IArticle[];
  filterArticles?: any;
  clearFilter?: any;
  setArticleDetail?: any;
  addArticle?: any;
  deleteArticle?: any;
}

const ArticleContext = createContext({} as IContextProps);

export default ArticleContext;
