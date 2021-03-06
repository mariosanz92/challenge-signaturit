import { createContext } from 'react';
import { IArticle } from '../../interfaces/IArticle';

interface IContextProps {
  articles: IArticle[];
  selectedType: string;
  selectedArticle: IArticle | null;
  filtered: null | IArticle[];
  filterArticles: (value: string) => void;
  setArticleDetail: (value: string) => void;
  addArticle: (value: IArticle) => void;
  deleteArticle: (value: string) => void;
  setType: (value: string) => void;
}

const ArticleContext = createContext({} as IContextProps);

export default ArticleContext;
