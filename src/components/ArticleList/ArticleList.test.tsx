import { fireEvent, render, screen } from '@testing-library/react';
import ArticleList from '.';
import IArticle from '../../interfaces/IArticle';
import ArticleContext from '../../context/Article/ArticleContext';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Article list', () => {
  const articles = [
    { title: 'fistTitle', type: 'aType', text: 'a text', id: '1', date: 'Date' },
    { title: 'secondTitle', type: 'aType', text: 'a text', id: '2', date: 'Date' },
  ];

  const renderArticleList = (articleList: IArticle[] = articles) => {
    render(
      <ArticleContext.Provider value={{ articles: articleList, filtered: null, selectedArticle: null }}>
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
    { title: 'Title', type: 'aType', text: 'a text', id: '1', date: 'Date' },
    { title: 'Title', type: 'aType', text: 'a text', id: '2', date: 'Date' },
    { title: 'Title', type: 'aType', text: 'a text', id: '3', date: 'Date' },
    { title: 'Title', type: 'aType', text: 'a text', id: '4', date: 'Date' },
    { title: 'Title', type: 'aType', text: 'a text', id: '5', date: 'Date' },
    { title: 'Title', type: 'aType', text: 'a text', id: '6', date: 'Date' },
  ];

  const renderArticleList = (articleList: IArticle[] = articles) => {
    render(
      <ArticleContext.Provider value={{ articles: articleList, filtered: null, selectedArticle: null }}>
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
