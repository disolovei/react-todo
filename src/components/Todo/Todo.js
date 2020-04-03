import React from 'react';
import { connect } from 'react-redux';
import AddTask from '../AddTask/AddTask';
import TasksList from '../TasksList/TasksList';
import Loader from '../Loader/Loader';

function Todo({ loaded }) {
    return (
        <React.Fragment>
            <h1>Тудушка</h1>
            <AddTask />
            {
            loaded
            ? <TasksList />
            : <Loader />
            }
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return { 
        loaded: state.todo.loaded
    };
}

export default connect(mapStateToProps)(Todo);