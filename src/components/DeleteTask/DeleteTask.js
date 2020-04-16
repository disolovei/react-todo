import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from '../../redux/actions/todo';
import Button from '../Form/Button/Button';
import axios from 'axios';

function DeleteTask({ taskID, deleteTask }) {
    const deleteHandler = (e) => {
        deleteTask(taskID);
    };

    return (
        <Button onClick={deleteHandler}>-</Button>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        deleteTask: (ID) => dispatch(removeTask(ID)),
    };
}

export default connect(null, mapDispatchToProps)(DeleteTask);
