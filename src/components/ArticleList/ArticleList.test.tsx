import { render, screen } from '@testing-library/react';
import ArticleList from '.';
import ArticleContext from '../../context/Article/ArticleContext';

const articles = [
  { title: 'fistTitle', type: 'aType', description: 'a description', id: 1 },
  { title: 'secondTitle', type: 'aType', description: 'a description', id: 2 },
];

describe('Article list', () => {
  beforeEach(() => {
    render(
      <ArticleContext.Provider value={{ articles, filtered: null }}>
        <ArticleList />
      </ArticleContext.Provider>
    );
  });

  test('renders a list of articles', () => {
    const listOfArticles = screen.getByRole('list');
    expect(listOfArticles).toBeInTheDocument();
  });

  test('renders a number of articles', () => {
    const listOfArticles = screen.getAllByRole('listitem');
    expect(listOfArticles).toHaveLength(2);
  });
});
