import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import AddTask from './components/AddTask/AddTask';
import TasksList from './components/TasksList/TasksList';
import Loader from './components/Loader/Loader';

function App({ loaded, taskList }) {
  return (
    <div className="container">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>
      <h1>Тудушка</h1>
      <AddTask />
      {
        loaded
        ? <TasksList />
        : <Loader />
      }
    </div>
  );
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(App);