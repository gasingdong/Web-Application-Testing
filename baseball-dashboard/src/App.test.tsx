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
  it('has buttons for strike, ball, foul, hit', (): void => {
    expect(dash.getByLabelText(/strike/i));
  });
});
