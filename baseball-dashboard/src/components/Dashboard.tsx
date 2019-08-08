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
  const strike = (): void => {
    setStrikes(strikes + 1);
  };

  const ball = (): void => {
    setBalls(balls + 1);
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
      <button type="button">Foul</button>
      <button type="button">Hit</button>
    </div>
  );
};

export default Dashboard;
