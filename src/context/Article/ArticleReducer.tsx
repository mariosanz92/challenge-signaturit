import { IArticle } from '../../interfaces/IArticle';
import IInitialState from '../../interfaces/IInitialState';
import { FILTER_ARTICLES, ARTICLE_DETAIL, ADD_ARTICLE, DELETE_ARTICLE, SET_TYPE } from './types';

const ArticleReducer = (state: IInitialState, action: { type: string; payload: string | IArticle }): IInitialState => {
  switch (action.type) {
    case FILTER_ARTICLES:
      return {
        ...state,
        filtered:
          action.payload === 'all articles'
            ? null
            : state.articles.filter((article: IArticle) => article.type === action.payload),
      };

    case ARTICLE_DETAIL:
      return {
        ...state,
        selectedArticle: state.articles.find((article: IArticle) => article.id === action.payload) || null,
      };

    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload as IArticle],
      };

    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((article: IArticle) => article.id !== action.payload),
      };

    case SET_TYPE:
      return {
        ...state,
        selectedType: action.payload as string,
      };

    default:
      return state;
  }
};

export default ArticleReducer;
