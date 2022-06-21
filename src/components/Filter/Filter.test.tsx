import { fireEvent, render, screen } from '@testing-library/react';
import Filter from '.';
import ArticleContext from '../../context/Article/ArticleContext';

const articles = [
  { title: 'fistTitle', type: 'one type', description: 'a description', id: 1 },
  { title: 'secondTitle', type: 'second type', description: 'a description', id: 2 },
];

describe('Filter', () => {
  beforeEach(() => {
    render(
      <ArticleContext.Provider value={{ articles, filtered: null, clearFilter: () => {} }}>
        <Filter />
      </ArticleContext.Provider>
    );
  });

  test('renders a filter', () => {
    const filter = screen.getByText('all articles');
    expect(filter).toBeInTheDocument();
  });

  test('renders types', () => {
    const filter = screen.getByText('all articles');

    fireEvent.click(filter);

    const firtType = screen.getByText('one type');
    const SecondType = screen.getByText('second type');

    expect(firtType).toBeInTheDocument();
    expect(SecondType).toBeInTheDocument();
  });
});
