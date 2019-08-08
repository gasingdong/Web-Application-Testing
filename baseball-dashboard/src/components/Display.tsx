import React from 'react';

interface DisplayProps {
  strikes: number;
  balls: number;
}

const Display = ({ strikes, balls }: DisplayProps): React.ReactElement => {
  return (
    <div className="display">
      <h1 data-testid="strikes">Strikes: {strikes}</h1>
      <h1 data-testid="balls">Balls: {balls} </h1>
    </div>
  );
};

export default Display;
