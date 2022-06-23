import IArticle from '../../interfaces/IArticle';
import { FILTER_ARTICLES, CLEAR_FILTER, ARTICLE_DETAIL, ADD_ARTICLE, DELETE_ARTICLE } from './types';

const ArticleReducer = (
  state: { articles: IArticle[]; selectedType: string; filtered: any; selectedArticle: any },
  action: { type: string; payload?: any }
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

    case ARTICLE_DETAIL:
      return {
        ...state,
        selectedArticle: state.articles.find((article: IArticle) => article.id === action.payload),
      };

    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
        filtered:
          state.filtered &&
          (state.filtered[0].type === action.payload.type ? [...state.filtered, action.payload] : [...state.filtered]),
      };

    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((article: IArticle) => article.id !== action.payload),
        filtered: state.filtered && state.filtered.filter((article: IArticle) => article.id !== action.payload),
      };

    default:
      return state;
  }
};

export default ArticleReducer;
