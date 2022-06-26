import ArticleContext from './ArticleContext';
import articles from '../../data/articles';
import articleReducer from './ArticleReducer';
import { FILTER_ARTICLES, ARTICLE_DETAIL, ADD_ARTICLE, DELETE_ARTICLE, SET_TYPE } from './types';
import { IArticle } from '../../interfaces/IArticle';
import { useReducer } from 'react';
import IInitialState from '../../interfaces/IInitialState';

type ArticleStateProps = {
  children: JSX.Element;
};

const ArticleState = ({ children }: ArticleStateProps) => {
  const initialState: IInitialState = {
    articles,
    filtered: null,
    selectedArticle: null,
    selectedType: 'all articles',
  };

  const [state, dispatch] = useReducer(articleReducer, initialState);

  const filterArticles = (type: string) => {
    dispatch({ type: FILTER_ARTICLES, payload: type });
  };

  const setArticleDetail = (id: string) => {
    dispatch({ type: ARTICLE_DETAIL, payload: id });
  };

  const addArticle = (article: IArticle) => {
    dispatch({ type: ADD_ARTICLE, payload: article });
  };

  const deleteArticle = (articleId: string) => {
    dispatch({ type: DELETE_ARTICLE, payload: articleId });
  };

  const setType = (type: string) => {
    dispatch({ type: SET_TYPE, payload: type });
  };
  return (
    <ArticleContext.Provider
      value={{
        selectedType: state.selectedType,
        articles: state.articles,
        filtered: state.filtered,
        selectedArticle: state.selectedArticle,
        setType,
        filterArticles,
        setArticleDetail,
        addArticle,
        deleteArticle,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
