import { render, screen } from '@testing-library/react';
import DeleteArticle from '.';

describe('Delete article', () => {
  test('renders a title', () => {
    render(<DeleteArticle setShowModal={() => {}} removeArticle={() => {}} />);

    const aTitle = screen.getByRole('heading', { level: 2, name: /Are you sure to delete this article?/i });

    expect(aTitle).toBeInTheDocument();
  });

  test('renders a button to cancel action', () => {
    render(<DeleteArticle setShowModal={() => {}} removeArticle={() => {}} />);

    const aButton = screen.getByRole('button', { name: /cancel/i });

    expect(aButton).toBeInTheDocument();
  });

  test('renders a button to delete article', () => {
    render(<DeleteArticle setShowModal={() => {}} removeArticle={() => {}} />);

    const aButton = screen.getByRole('button', { name: /delete/i });

    expect(aButton).toBeInTheDocument();
  });
});
