import React from 'react';
import { Helmet } from 'react-helmet';
import TasksList from './components/TasksList/TasksList';

function App() {
  return (
    <div className="container">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>
      <TasksList />
    </div>
  );
}

export default App;