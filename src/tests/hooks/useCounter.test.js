import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter'

describe('testing hook useCounter', () => {
  test('return default values ', () => {
    const { result } = renderHook(() => useCounter());
    const counter = result.current.counter;
    const increment = result.current.increment;
    const decrement = result.current.decrement;
    const reset = result.current.reset;

    expect(counter).toBe(0)
    expect(typeof increment).toBe('function')
    expect(typeof decrement).toBe('function');
    expect(typeof reset).toBe('function')
  });
  
});
