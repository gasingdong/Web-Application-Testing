import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Display from './Display';

describe('display rendering', (): void => {
  it('has 2 text labels for strike and ball', (): void => {
    const display = render(<Display />);
    expect(display.getByText(/strikes/i));
    expect(display.getByText(/balls/i));
  });
});
