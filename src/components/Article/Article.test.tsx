import { render, screen } from '@testing-library/react';
import Article from '.';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
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

  test('not render button if is Simple type', () => {
    renderArticle('Simple');
    const aButton = screen.queryByRole('button', { name: 'Go to detail' });

    expect(aButton).not.toBeInTheDocument();
  });
});
