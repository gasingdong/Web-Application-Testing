import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Dashboard from './Dashboard';

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
