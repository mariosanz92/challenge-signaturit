import { render, screen } from '@testing-library/react';
import Pagination from '.';

describe('Pagination', () => {
  beforeEach(() => {
    render(<Pagination pageNumbers={[1, 2, 3, 4]} paginate={() => {}} currentPage={2} />);
  });
  test('renders a list of numbers', () => {
    const pages = screen.getAllByRole('listitem');
    expect(pages).toHaveLength(4);
  });

  test('current page should have color', () => {
    const pages = screen.getAllByRole('listitem');
    const currentPage = pages[1];
    expect(currentPage).toHaveStyle('background-color: #DCDCDC');
  });
});
