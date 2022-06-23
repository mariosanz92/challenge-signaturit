import { fireEvent, render, screen } from '@testing-library/react';
import Filter from '.';
import ArticleContext from '../../context/Article/ArticleContext';

const articles = [
  { title: 'fistTitle', type: 'one type', text: 'a text', id: '1', date: '12/12/12' },
  { title: 'secondTitle', type: 'second type', text: 'a text', id: '2', date: '12/12/12' },
];

describe('Filter', () => {
  beforeEach(() => {
    render(
      <ArticleContext.Provider value={{ articles, filtered: null, selectedArticle: null, clearFilter: () => {} }}>
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
