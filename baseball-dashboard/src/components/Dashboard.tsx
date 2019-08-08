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
  const increaseStrikes = (num: number): void => {
    setStrikes(strikes + num);
  };

  return (
    <div className="dashboard">
      <button
        data-testid="strike-button"
        type="button"
        onClick={(): void => increaseStrikes(1)}
      >
        Strike
      </button>
      <button data-testid="balls-button" type="button">
        Ball
      </button>
      <button type="button">Foul</button>
      <button type="button">Hit</button>
    </div>
  );
};

export default Dashboard;
