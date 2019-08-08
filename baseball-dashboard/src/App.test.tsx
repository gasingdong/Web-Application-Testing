import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  render,
  getByTestId,
  getByText,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

it('renders without crashing', (): void => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('dashboard displays', (): void => {
  const dash = render(<Dashboard />);
  const buttons = dash.getAllByRole('button');
  const types = ['strike', 'ball', 'foul', 'hit'];
  const hasType = (button: HTMLElement, index: number): boolean =>
    button.textContent !== null &&
    button.textContent.toUpperCase() === types[index].toUpperCase();

  it('has 4 buttons for strike, ball, foul, hit', (): void => {
    expect(buttons).toHaveLength(4);
    for (let i = 0; i < types.length; i++) {
      expect(
        buttons.find((button): boolean => hasType(button, i))
      ).toBeDefined();
    }
  });
});

describe('display rendering', (): void => {
  it('has 2 text labels for strike and ball', (): void => {
    const display = render(<Display />);
    expect(display.getByText(/strikes/i));
    expect(display.getByText(/balls/i));
  });
});

describe('display functionality', (): void => {
  it('strike button increases strike count by 1', (): void => {
    const app = render(<App />);
    const prevStrikes = app.getByTestId('strike-num').textContent;
    fireEvent.click(app.getByTestId('strike-button'));
    const strikes = app.getByTestId('strike-num').textContent;
    expect(strikes).toBeDefined();
    expect(prevStrikes).toBeDefined();

    if (prevStrikes) {
      expect(Number(strikes)).toBe(Number(prevStrikes) + 1);
    }
  });
});
