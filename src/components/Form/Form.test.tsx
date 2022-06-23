import { fireEvent, render, screen } from '@testing-library/react';
import Form from '.';

describe('Filter', () => {
  beforeEach(() => {});

  const renderForm = (click: () => void) => {
    render(<Form types={['Simple', 'Custom', 'Advanced']} onSubmit={click} />);
  };

  test('should choose a type to show form', () => {
    renderForm(() => {});
    const type = screen.getAllByRole('checkbox');

    fireEvent.click(type[0]);

    const form = screen.getByLabelText('form');

    expect(form).toBeInTheDocument();
  });

  test('should show an error message', () => {
    renderForm(() => {});
    const type = screen.getAllByRole('checkbox');

    fireEvent.click(type[0]);

    const button = screen.getByRole('button', { name: 'Create Article' });

    fireEvent.click(button);

    const errorText = screen.getByText('Empty fields are not allowed');

    expect(errorText).toBeInTheDocument();
  });

  test('should add values on inputs', () => {
    renderForm(() => {});
    const type = screen.getAllByRole('checkbox');

    fireEvent.click(type[0]);

    const input = ((screen.getByLabelText('input') as HTMLInputElement).value = 'a title');

    const inputDate = ((screen.getByLabelText(/input-date/i) as HTMLInputElement).value = 'a Date');

    expect(input).toBe('a title');
    expect(inputDate).toBe('a Date');
  });
});
