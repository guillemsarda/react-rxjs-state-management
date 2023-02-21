import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './testing-components/Counter';
import App from './testing-components/App';

describe('useStore hook', () => {
  test('should display the initial state.', async () => {
    render(<Counter />);
    const element = screen.getByTestId('counter');
    expect(element.textContent).toBe('0');
  });
  let click: number;
  let expectNum: number;
  test("should increment the state's value.", async () => {
    render(<App />);
    const counter = screen.getByTestId('counter');
    const incButton = screen.getByText('INCREMENT');
    expect(counter.textContent).toBe('0');
    click = Math.floor(Math.random() * 10);
    expectNum = click;
    while (click) {
      fireEvent.click(incButton);
      click--;
    }
    expect(counter.textContent).toBe(expectNum + '');
  });

  test("should decrement the state's value.", async () => {
    render(<App />);
    const counter = screen.getByTestId('counter');
    const incButton = screen.getByText('DECREMENT');
    expect(counter.textContent).toBe(expectNum + '');
    click = Math.floor(Math.random() * 10);
    expectNum -= click;
    while (click) {
      fireEvent.click(incButton);
      click--;
    }
    expect(counter.textContent).toBe(expectNum + '');
  });

  test("should increment and decrement the state's value.", async () => {
    render(<App />);
    const counter = screen.getByTestId('counter');
    const incButton = screen.getByText('INCREMENT');
    const decButton = screen.getByText('DECREMENT');
    expect(counter.textContent).toBe(expectNum + '');
    click = Math.floor(Math.random());
    expectNum -= click;
    while (click) {
      fireEvent.click(decButton);
      click--;
    }
    expect(counter.textContent).toBe(expectNum + '');

    click = Math.floor(Math.random());
    expectNum += click;
    while (click) {
      fireEvent.click(incButton);
      click--;
    }
    expect(counter.textContent).toBe(expectNum + '');
  });
});
