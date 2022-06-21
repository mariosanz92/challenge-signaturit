import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const articles = [
  { title: 'Title', type: 'one type', description: 'a description', id: 1 },
  { title: 'Title', type: 'one type', description: 'a description', id: 2 },
  { title: 'Title', type: 'one type', description: 'a description', id: 3 },
  { title: 'Title', type: 'one type', description: 'a description', id: 4 },
  { title: 'Title', type: 'one type', description: 'a description', id: 5 },
  { title: 'Title', type: 'other type', description: 'a description', id: 6 },
];

jest.mock('./data/articles', () => articles);

describe('App', () => {
  beforeEach(() => {
    render(<App />);
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
