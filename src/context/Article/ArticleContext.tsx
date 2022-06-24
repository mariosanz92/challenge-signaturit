import { createContext } from 'react';
import IArticle from '../../interfaces/IArticle';

interface IContextProps {
  articles: IArticle[];
  selectedType?: string | null;
  selectedArticle: any;
  filtered: null | IArticle[];
  filterArticles?: any;
  clearFilter?: any;
  setArticleDetail?: any;
  addArticle?: any;
  deleteArticle?: any;
  setType?: any;
}

const ArticleContext = createContext({} as IContextProps);

export default ArticleContext;
