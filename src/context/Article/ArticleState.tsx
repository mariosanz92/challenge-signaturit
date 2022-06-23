import ArticleContext from './ArticleContext';
import articles from '../../data/articles';
import articleReducer from './ArticleReducer';
import { FILTER_ARTICLES, CLEAR_FILTER, ARTICLE_DETAIL, ADD_ARTICLE, DELETE_ARTICLE } from './types';
import IArticle from '../../interfaces/IArticle';
import { useReducer } from 'react';

type ArticleStateProps = {
  children: JSX.Element;
};

const ArticleState = ({ children }: ArticleStateProps) => {
  const initialState: any = {
    articles,
    filtered: null,
    selectedArticle: null,
  };

  const [state, dispatch] = useReducer(articleReducer, initialState);

  const filterArticles = (type: string) => {
    dispatch({ type: FILTER_ARTICLES, payload: type });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const setArticleDetail = (id: string) => {
    dispatch({ type: ARTICLE_DETAIL, payload: id });
  };

  const addArticle = (article: IArticle) => {
    dispatch({ type: ADD_ARTICLE, payload: article });
  };

  const deleteArticle = (articleId: string) => {
    console.log(articles);
    dispatch({ type: DELETE_ARTICLE, payload: articleId });
  };
  return (
    <ArticleContext.Provider
      value={{
        articles: state.articles,
        filtered: state.filtered,
        selectedArticle: state.selectedArticle,
        filterArticles,
        clearFilter,
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
