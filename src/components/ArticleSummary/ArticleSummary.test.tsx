import { fireEvent, render, screen } from '@testing-library/react';
import ArticleSummary from '.';
import ArticleState from '../../context/Article/ArticleState';

const articles = [
  { title: 'Title', type: 'one type', text: 'a text', id: '1' },
  { title: 'Title', type: 'one type', text: 'a text', id: '2' },
  { title: 'Title', type: 'one type', text: 'a text', id: '3' },
  { title: 'Title', type: 'one type', text: 'a text', id: '4' },
  { title: 'Title', type: 'one type', text: 'a text', id: '5' },
  { title: 'Title', type: 'other type', text: 'a text', id: '6' },
];
jest.mock('../../data/articles', () => articles);

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('ArticleSummary', () => {
  beforeEach(() => {
    render(
      <ArticleState>
        <ArticleSummary />
      </ArticleState>
    );
  });

  test('should filter by type', () => {
    const filter = screen.getByText('other type');

    fireEvent.click(filter);

    const article = screen.getAllByText('Title');

    expect(article).toHaveLength(1);
  });

  test('should not filter by type', () => {
    const articles = screen.getAllByText('Title');
    const numberOfArticlesPerPage = 5;

    expect(articles).toHaveLength(numberOfArticlesPerPage);
  });

  test('should show two pages', () => {
    const articles = screen.getByText(2);

    expect(articles).toBeInTheDocument;
  });
});
