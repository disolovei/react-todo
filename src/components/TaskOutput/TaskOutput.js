import React from 'react';
import { connect } from 'react-redux';
import { toggleResolve, removeTask } from '../../redux/actions/todo';
import DeleteTask from '../DeleteTask/DeleteTask';

function TaskOutput({ task, taskID, removeHandler, toggleResolve }) {
    const taskIDHTML = `task-${taskID}`;

    return <li>
        <input 
            type="checkbox" 
            id={taskIDHTML} 
            checked={task.resolved || false} 
            onChange={ toggleResolve.bind(null, taskID) } 
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