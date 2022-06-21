import { render, screen } from '@testing-library/react';
import Article from '.';

describe('Article', () => {
  beforeEach(() => {
    render(<Article title="aTitle" type="aType" />);
  });

  test('renders an article', () => {
    const anArticle = screen.getByRole('listitem');
    expect(anArticle).toBeInTheDocument();
  });
  test('renders a title', () => {
    const aTitle = screen.getByRole('heading', { level: 2, name: 'aTitle' });
    expect(aTitle).toBeInTheDocument();
  });

  test('renders a type', () => {
    const aType = screen.getByText('Type: aType');
    expect(aType).toBeInTheDocument();
  });
});
