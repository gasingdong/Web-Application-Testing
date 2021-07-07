import React from 'react';

interface DashboardProps {
  strikes: number;
  setStrikes: (num: number) => void;
  balls: number;
  setBalls: (num: number) => void;
}

const Dashboard = ({
  strikes,
  setStrikes,
  balls,
  setBalls,
}: DashboardProps): React.ReactElement => {
  const reset = (): void => {
    setStrikes(0);
    setBalls(0);
  };

  const strike = (): void => {
    strikes < 2 ? setStrikes(strikes + 1) : reset();
  };

  const ball = (): void => {
    balls < 3 ? setBalls(balls + 1) : reset();
  };

  const foul = (): void => {
    if (strikes < 2) {
      strike();
    }
  };

  return (
    <div className="dashboard">
      <button
        data-testid="strike-button"
        type="button"
        onClick={(): void => strike()}
      >
        Strike
      </button>
      <button
        data-testid="balls-button"
        type="button"
        onClick={(): void => ball()}
      >
        Ball
      </button>
      <button
        data-testid="foul-button"
        type="button"
        onClick={(): void => foul()}
      >
        Foul
      </button>
      <button
        data-testid="hit-button"
        type="button"
        onClick={(): void => reset()}
      >
        Hit
      </button>
    </div>
  );
};

export default Dashboard;
