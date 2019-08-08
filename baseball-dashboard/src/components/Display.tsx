import React from 'react';

const Display = (): React.ReactElement => {
  return (
    <div className="display">
      <h1 data-testid="strikes">Strikes:</h1>
      <h1 data-testid="balls">Balls:</h1>
    </div>
  );
};

export default Display;
