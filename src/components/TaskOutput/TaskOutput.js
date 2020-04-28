import React from 'react';
import { connect } from 'react-redux';
import { toggleResolve } from '../../redux/actions/todo';
import DeleteTask from '../DeleteTask/DeleteTask';
import axios from 'axios';

function resolveTask(taskID) {
    return axios({
        method: "put",
        url: `http://localhost:4000/api/tasks/resolve/${taskID}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
        },
    });   
}

function TaskOutput({ task, taskID, toggleResolve }) {
    const taskIDHTML = `task-${taskID}`;

    return <li>
        <input 
            type="checkbox" 
            id={taskIDHTML} 
            checked={task.resolved || false} 
            onChange={() => {
                resolveTask(taskID)
                .then(response => {
                    if ( response.status === 200 ) {
                        toggleResolve(taskID);
                    }
                })
                .catch(error => console.error(error.message))
            }} 
        />
        <label 
            htmlFor={taskIDHTML}>
            <h3>{task.title}</h3>
            <div className="task-description">{task.description}</div>
        </label>
        <DeleteTask taskID={taskID}/>
    </li>;
}

function mapDispathToProps(dispath) {
    return {
        toggleResolve: (ID) => dispath(toggleResolve(ID)),
    };
}

export default connect(null, mapDispathToProps)(TaskOutput);