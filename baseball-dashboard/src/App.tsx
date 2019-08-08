import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <Dashboard />
      <Display />
    </div>
  );
};

export default App;
