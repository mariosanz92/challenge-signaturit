import IArticle from '../../interfaces/IArticle';
import { FILTER_ARTICLES, CLEAR_FILTER } from './types';

const ArticleReducer = (
  state: { articles: IArticle[]; selectedType: string; filtered: any },
  action: { type: string; payload?: string }
) => {
  switch (action.type) {
    case FILTER_ARTICLES:
      return {
        ...state,
        filtered: state.articles.filter((article: IArticle) => article.type === action.payload),
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };

    default:
      return state;
  }
};

export default ArticleReducer;
