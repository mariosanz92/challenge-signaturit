import { fireEvent, render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const articles = [
  { title: 'Title', type: 'Simple', id: '1' },
  { title: 'Title', type: 'Simple', id: '2' },
  { title: 'Title', type: 'Simple', id: '3' },
  { title: 'Title', type: 'Custom', text: 'a text', id: '4' },
];

jest.mock('./data/articles', () => articles);

describe('App', () => {
  test('add an article', () => {
    render(<App />, { wrapper: MemoryRouter });

    const addArticleButton = screen.getByRole('button', { name: /add article/i });

    fireEvent.click(addArticleButton);

    const modal = screen.getByLabelText('modal');
    const simpleTypeCheckbox = within(modal).getAllByRole('checkbox');
    fireEvent.click(simpleTypeCheckbox[0]);

    const titleInput = screen.getByPlaceholderText(/title/i);

    userEvent.type(titleInput, 'I am a Title');

    fireEvent.change(screen.getByLabelText(/input-date/i), { target: { value: '2022-06-18' } });

    const createArticleButton = screen.getByRole('button', { name: /create/i });
    fireEvent.click(createArticleButton);

    const getListByButton = screen.getAllByRole('button', { name: /go to detail/i });

    expect(getListByButton).toHaveLength(5);
  });

  test('delete an article', () => {
    render(<App />, { wrapper: MemoryRouter });

    const gotToDetailButton = screen.getAllByRole('button', { name: /go to detail/i });
    fireEvent.click(gotToDetailButton[0]);

    const deleteButton = screen.getByRole('button', { name: /delete article/i });
    fireEvent.click(deleteButton);

    const modal = screen.getByLabelText('modal');
    const confirmDelete = within(modal).getByRole('button', { name: /delete article/i });
    fireEvent.click(confirmDelete);

    const getListByButton = screen.getAllByRole('button', { name: /go to detail/i });
    expect(getListByButton).toHaveLength(3);
  });
});
