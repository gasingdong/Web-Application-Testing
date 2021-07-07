import React from 'react';

interface DisplayProps {
  strikes: number;
  balls: number;
}

const Display = ({ strikes, balls }: DisplayProps): React.ReactElement => {
  return (
    <div className="display">
      <h1 data-testid="strikes">
        Strikes: <p data-testid="strike-num">{strikes}</p>
      </h1>
      <h1 data-testid="balls">
        Balls: <p data-testid="balls-num">{balls}</p>
      </h1>
    </div>
  );
};

export default Display;
