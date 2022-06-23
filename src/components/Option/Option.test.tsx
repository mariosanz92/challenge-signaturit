import { render, screen } from '@testing-library/react';
import Option from '.';

describe('Option', () => {
  test('should not show Choose a Type text if there is a selected type', () => {
    render(<Option types={['first type', 'second type']} selectedType="" setSelectedType={() => {}} />);

    const text = screen.getByText(/Choose a Type/i);

    expect(text).toBeInTheDocument();
  });

  test('should not show Choose a Type text if there is a selected type', () => {
    render(<Option types={['first type', 'second type']} selectedType="" setSelectedType={() => {}} />);

    const text = screen.getByText(/Choose a Type/i);

    expect(text).toBeInTheDocument();
  });

  test('should show selected option', async () => {
    render(<Option types={['first type', 'second type']} selectedType="first type" setSelectedType={() => {}} />);

    const option = screen.getAllByRole('checkbox');

    expect(option[0]).toBeChecked();
  });
});
