import React from 'react';

const Dashboard = (): React.ReactElement => {
  return (
    <div className="dashboard">
      <button type="button">Strike</button>
      <button type="button">Ball</button>
      <button type="button">Foul</button>
      <button type="button">Hit</button>
    </div>
  );
};

export default Dashboard;
