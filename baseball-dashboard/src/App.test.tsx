import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

it('renders without crashing', (): void => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('display functionality', (): void => {
  it('strike button increases strike count by 1', (): void => {
    const app = render(<App />);
    const prevStrikes = app.getByTestId('strike-num').textContent;
    const button = app.getByTestId('strike-button');
    fireEvent.click(button);
    let strikes = app.getByTestId('strike-num').textContent;
    expect(strikes).toBeDefined();
    expect(prevStrikes).toBeDefined();

    if (prevStrikes) {
      expect(Number(strikes)).toBe(Number(prevStrikes) + 1);
      fireEvent.click(button);
      fireEvent.click(button);
      strikes = app.getByTestId('strike-num').textContent;
      expect(Number(strikes)).toBe(0);
    }
  });

  it('ball button increases ball count by 1', (): void => {
    const app = render(<App />);
    const prevBalls = app.getByTestId('balls-num').textContent;
    fireEvent.click(app.getByTestId('balls-button'));
    const balls = app.getByTestId('balls-num').textContent;
    expect(balls).toBeDefined();
    expect(prevBalls).toBeDefined();

    if (prevBalls) {
      expect(Number(balls)).toBe(Number(prevBalls) + 1);
    }
  });
});
