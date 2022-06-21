import { createContext } from 'react';
import IArticle from '../../interfaces/IArticle';

interface IContextProps {
  articles: IArticle[];
  filtered: null | IArticle[];
  filterArticles?: any;
  clearFilter?: any;
}

const ArticleContext = createContext({} as IContextProps);

export default ArticleContext;
