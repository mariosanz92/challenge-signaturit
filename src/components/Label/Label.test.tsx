import { render, screen } from '@testing-library/react';
import Label from '.';

describe('Label', () => {
  test('renders a text', () => {
    render(<Label text="aText" color="aColor" />);
    const labelText = screen.getByText('aText');
    expect(labelText).toBeInTheDocument();
  });

  test('renders a background color as prop', () => {
    render(<Label text="aText" color="aColor" />);
    const labelText = screen.getByText('aText');
    expect(labelText).toHaveStyle('background-color: aColor');
  });

  test('renders a background color by default', () => {
    render(<Label text="aText" />);
    const labelText = screen.getByText('aText');
    expect(labelText).toHaveStyle('background-color: #E0FFFF');
  });
});
