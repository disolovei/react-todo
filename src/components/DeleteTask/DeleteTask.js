
import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from '../../redux/actions/todo';
import Button from '../Form/Button/Button';
import axios from 'axios';

function DeleteTask({ taskID, localDeleteTask }) {
    const removetaskFromDB = (taskID) => {
        axios({
            method: "delete",
            url: `http://localhost:4000/api/tasks/one/${taskID}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Cache-Control": "no-cache",
            },
        })
            .then(response => {
                if (200 === response.status) {
                    localDeleteTask(taskID);
                }
            })
            .catch(error => console.error(error.message));
    }
    return (
        <Button onClick={(e) => {removetaskFromDB(taskID)}}>-</Button>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        localDeleteTask: (ID) => dispatch(removeTask(ID)),
    };
}

export default connect(null, mapDispatchToProps)(DeleteTask);
