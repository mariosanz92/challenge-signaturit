import { render, screen } from '@testing-library/react';
import ArticleList from '.';
import ArticleContext from '../../context/Article/ArticleContext';
import IArticle from '../../interfaces/IArticle';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Article Detail', () => {
  const article = { title: 'A Title', type: 'Advanced', text: 'a text', id: '1', date: 'Date', image: 'an image' };

  const renderDetail = (anArticle: IArticle = article) => {
    render(
      <ArticleContext.Provider value={{ articles: [anArticle], filtered: null, selectedArticle: anArticle }}>
        <ArticleList />
      </ArticleContext.Provider>
    );
  };

  test('renders the title of an article', () => {
    renderDetail();

    const aTitle = screen.getByRole('heading', { level: 1, name: /A Title/i });

    expect(aTitle).toBeInTheDocument();
  });

  test('renders the text of an article', () => {
    renderDetail();

    const aTitle = screen.getByText(/a text/i);

    expect(aTitle).toBeInTheDocument();
  });

  test('renders the image of an article', () => {
    renderDetail();

    const anImage = screen.getByRole('img');

    expect(anImage).toHaveAttribute('src', 'an image');
  });

  test('should not render the image of an article when is not advanced type', () => {
    const article = { title: 'A Title', type: 'Simple', id: '1', date: 'Date' };
    renderDetail(article);

    const anImage = screen.queryByRole('img');

    expect(anImage).not.toBeInTheDocument();
  });

  test('should render a button to come back to summary', () => {
    renderDetail();

    const backButton = screen.getByRole('button', { name: /back to summary/i });

    expect(backButton).toBeInTheDocument();
  });

  test('should render a button to delete article', () => {
    renderDetail();

    const deleteButton = screen.getByRole('button', { name: /delete article/i });

    expect(deleteButton).toBeInTheDocument();
  });
});
