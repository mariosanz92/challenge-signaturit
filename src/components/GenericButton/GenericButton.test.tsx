import { fireEvent, render, screen } from '@testing-library/react';
import GenericButton from './index';

describe('Article', () => {
  test('renders the button', () => {
    render(<GenericButton text="A text" handleClick={() => {}} />);

    const aButton = screen.getByRole('button', { name: 'A text' });

    expect(aButton).toBeInTheDocument();
  });

  test('call onClick', () => {
    const click = jest.fn();
    render(<GenericButton text="A text" handleClick={click} />);
    const aButton = screen.getByRole('button', { name: 'A text' });

    fireEvent.click(aButton);

    expect(click).toHaveBeenCalledTimes(1);
  });
});
