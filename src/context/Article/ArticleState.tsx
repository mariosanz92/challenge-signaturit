import ArticleContext from './ArticleContext';
import { useReducer } from 'react';
import articles from '../../data/articles';
import articleReducer from './ArticleReducer';
import { FILTER_ARTICLES, CLEAR_FILTER } from './types';

type ArticleStateProps = {
  children: JSX.Element;
};

const ArticleState = ({ children }: ArticleStateProps) => {
  const initialState: any = {
    articles,
    filtered: null,
  };

  const [state, dispatch] = useReducer(articleReducer, initialState);

  const filterArticles = (type: string) => {
    dispatch({ type: FILTER_ARTICLES, payload: type });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ArticleContext.Provider
      value={{ articles: state.articles, filtered: state.filtered, filterArticles, clearFilter }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
