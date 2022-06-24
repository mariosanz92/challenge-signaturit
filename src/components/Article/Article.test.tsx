import { render, screen } from '@testing-library/react';
import Article from '.';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Article', () => {
  const renderArticle = (type: string = 'aType') => {
    render(<Article title="aTitle" type={type} id="1" />);
  };

  test('renders an article', () => {
    renderArticle();
    const anArticle = screen.getByRole('listitem');
    expect(anArticle).toBeInTheDocument();
  });
  test('renders a title', () => {
    renderArticle();
    const aTitle = screen.getByRole('heading', { level: 2, name: 'aTitle' });
    expect(aTitle).toBeInTheDocument();
  });

  test('renders a type', () => {
    renderArticle();
    const aType = screen.getByText('Type: aType');
    expect(aType).toBeInTheDocument();
  });

  test('renders a button', () => {
    renderArticle();
    const aButton = screen.getByRole('button', { name: /go to detail/i });
    expect(aButton).toBeInTheDocument();
  });
});
