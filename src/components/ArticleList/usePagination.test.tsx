import { act, renderHook } from '@testing-library/react';
import usePagination from './usePagination';

const articles = [
  { title: 'Title', type: 'aType', text: 'a text', id: '1', date: 'Date' },
  { title: 'Title', type: 'aType', text: 'a text', id: '2', date: 'Date' },
  { title: 'Title', type: 'aType', text: 'a text', id: '3', date: 'Date' },
  { title: 'Title', type: 'aType', text: 'a text', id: '4', date: 'Date' },
  { title: 'Title', type: 'aType', text: 'a text', id: '5', date: 'Date' },
  { title: 'Title', type: 'aType', text: 'a text', id: '6', date: 'Date' },
  { title: 'Title', type: 'aType', text: 'a text', id: '7', date: 'Date' },
];

describe('useValidation', () => {
  test('should show the articles of the actual page', () => {
    const { result } = renderHook(() => usePagination(articles));
    const { currentArticles } = result.current;

    expect(currentArticles).toHaveLength(5);
    expect(currentArticles).toEqual([articles[0], articles[1], articles[2], articles[3], articles[4]]);
  });

  test('should show the number of the pages', () => {
    const { result } = renderHook(() => usePagination(articles));

    const { pageNumbers } = result.current;

    expect(pageNumbers).toEqual([1, 2]);
  });

  test('should show URL not valid mesage', () => {
    const { result } = renderHook(() => usePagination(articles));

    const { currentPage } = result.current;

    expect(currentPage).toEqual(1);
  });
});
