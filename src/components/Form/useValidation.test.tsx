import { act, renderHook } from '@testing-library/react';
import useValidation from './useValidation';

describe('useValidation', () => {
  test('should show Empty field error', () => {
    const { result } = renderHook(() => useValidation({ title: '', text: '', date: '', id: '', type: '' }));
    act(() => {
      const currentError = result.current.checkValidation('Simple');
      expect(currentError.message).toEqual('Empty fields are not allowed');
    });
  });

  test('should show URL not valid mesage', () => {
    const { result } = renderHook(() =>
      useValidation({
        title: 'title',
        text: 'text',
        date: 'date',
        image: 'Not url',
        id: '1',
        type: 'Advanced',
      })
    );
    act(() => {
      const currentError = result.current.checkValidation('Advanced');
      expect(currentError.message).toEqual('Image field does not have a valid URL');
    });
  });

  test('should show URL not valid message', () => {
    const { result } = renderHook(() =>
      useValidation({
        title: 'title',
        text: 'text',
        date: 'date',
        image: 'http://IAmAnImage.png',
        id: '1',
        type: 'Advanced',
      })
    );
    act(() => {
      const currentError = result.current.checkValidation('Advanced');
      expect(currentError.message).toEqual('');
    });
  });
});
