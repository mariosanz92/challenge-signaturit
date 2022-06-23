import { act, renderHook } from '@testing-library/react';
import useValidation from './useValidation';

describe('useValidation', () => {
  test('should show Empty field error', () => {
    const { result } = renderHook(() => useValidation('Simple', { title: '', date: '' }));
    act(() => {
      result.current.checkValidation('Simple');
    });
    const errorMessage = result.current.error.message;
    expect(errorMessage).toEqual('Empty fields are not allowed');
  });

  test('should show URL not valid mesage', () => {
    const { result } = renderHook(() =>
      useValidation('Advanced', {
        title: 'title',
        text: 'text',
        date: 'date',
        image: 'Not url',
        id: '1',
        type: 'Advanced',
      })
    );
    act(() => {
      result.current.checkValidation('Advanced');
    });
    const errorMessage = result.current.error.message;
    expect(errorMessage).toEqual('Image field does not have a valid URL');
  });

  test('should show URL not valid mesage', () => {
    const { result } = renderHook(() =>
      useValidation('Advanced', {
        title: 'title',
        text: 'text',
        date: 'date',
        image: 'http://IAmAnImage.png',
        id: '1',
        type: 'Advanced',
      })
    );
    act(() => {
      result.current.checkValidation('Advanced');
    });
    const errorStatus = result.current.error.status;
    expect(errorStatus).toEqual(false);
  });
});
