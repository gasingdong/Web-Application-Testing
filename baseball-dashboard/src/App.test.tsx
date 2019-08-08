import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import Dashboard from './components/Dashboard';

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
