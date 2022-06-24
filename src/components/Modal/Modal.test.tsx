import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '.';

describe('Option', () => {
  const renderModal = (click: () => void = () => {}) => {
    render(
      <Modal title="aTitle" onClose={click}>
        <h1>Hello Signaturit</h1>
      </Modal>
    );
  };
  test('should show a title', () => {
    renderModal();
    const aTitle = screen.getByRole('heading', { level: 2, name: 'aTitle' });

    expect(aTitle).toBeInTheDocument();
  });

  test('should show a children', () => {
    renderModal();
    const aChildren = screen.getByRole('heading', { level: 1, name: 'Hello Signaturit' });

    expect(aChildren).toBeInTheDocument();
  });

  test('should click on close button', () => {
    const click = jest.fn();

    renderModal(click);

    const closeButton = screen.getByRole('button');

    fireEvent.click(closeButton);

    expect(click).toHaveBeenCalled();
  });
});
