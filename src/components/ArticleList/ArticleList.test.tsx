import { fireEvent, render, screen } from '@testing-library/react';
import ArticleList from '.';
import IArticle from '../../interfaces/IArticle';

import ArticleContext from '../../context/Article/ArticleContext';

describe('Article list', () => {
  const articles = [
    { title: 'fistTitle', type: 'aType', description: 'a description', id: 1 },
    { title: 'secondTitle', type: 'aType', description: 'a description', id: 2 },
  ];

  const renderArticleList = (articleList: IArticle[] = articles) => {
    render(
      <ArticleContext.Provider value={{ articles: articleList, filtered: null }}>
        <ArticleList />
      </ArticleContext.Provider>
    );
  };

  test('renders a list of articles', () => {
    renderArticleList();
    const listOfArticles = screen.getByRole('list');
    expect(listOfArticles).toBeInTheDocument();
  });

  test('renders a number of articles', () => {
    renderArticleList(articles);
    const listOfArticles = screen.getAllByRole('listitem');
    expect(listOfArticles).toHaveLength(2);
  });
});

describe('Article list Pagination', () => {
  const articles = [
    { title: 'Title', type: 'aType', description: 'a description', id: 1 },
    { title: 'Title', type: 'aType', description: 'a description', id: 2 },
    { title: 'Title', type: 'aType', description: 'a description', id: 3 },
    { title: 'Title', type: 'aType', description: 'a description', id: 4 },
    { title: 'Title', type: 'aType', description: 'a description', id: 5 },
    { title: 'Title', type: 'aType', description: 'a description', id: 6 },
  ];

  const renderArticleList = (articleList: IArticle[] = articles) => {
    render(
      <ArticleContext.Provider value={{ articles: articleList, filtered: null }}>
        <ArticleList />
      </ArticleContext.Provider>
    );
  };

  test('renders page when click on number page', () => {
    renderArticleList();
    const pageNumber = screen.getByText(2);

    fireEvent.click(pageNumber);

    const articles = screen.getAllByText('Title');

    expect(articles).toHaveLength(1);
  });

  test('render five items per page', () => {
    renderArticleList();

    const articles = screen.getAllByText('Title');

    expect(articles).toHaveLength(5);
  });
});
