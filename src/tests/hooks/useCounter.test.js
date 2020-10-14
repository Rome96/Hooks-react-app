import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
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
  
  test('return counter in 10', () => {
    const { result } = renderHook(() => useCounter(10));
    const counter = result.current.counter
    expect(counter).toBe(10)
  });

  test('testing fn increment counter in 1', () => {
    const { result } = renderHook(() => useCounter(10));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;
    expect(counter).toBe(11)
  });

  test("testing fn decrement counter in 1", () => {
    const { result } = renderHook(() => useCounter(10));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { counter } = result.current;
    expect(counter).toBe(9);
  });

  test("testing fn reset counter = 0", () => {
    const { result } = renderHook(() => useCounter(10));
    const { reset, increment } = result.current;

    act(() => {
      increment()
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(10);
  });
  
});
