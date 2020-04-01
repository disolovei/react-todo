import React from 'react';
import { connect } from 'react-redux';
import { removeTask, resolveTask, unresolveTask } from '../../actions';

function TaskOutput({ task, taskID, removeHandler, resolve, unresolve }) {
    const taskIDHTML = `task-${taskID}`;

    const resolver = () => {
        if ( true === task.resolved ) {
            unresolve(taskID)
        } else {
            resolve(taskID)
        }
    };

    return <li>
        <input 
            type="checkbox" 
            id={taskIDHTML} 
            checked={task.resolved || false} 
            onChange={resolver} 
        />
        <label 
            htmlFor={taskIDHTML}>
            <h3>{task.title}</h3>
            <div className="task-description">{task.description}</div>
        </label>
        <button 
            type="button" 
            onClick={() => {removeHandler(taskID)}}
        >-</button>
    </li>;
}

function mapDispathToProps(dispath) {
    return {
        removeHandler: (ID) => dispath(removeTask(ID)),
        resolve: (ID) => dispath(resolveTask(ID)),
        unresolve: (ID) => dispath(unresolveTask(ID)),
    };
}

export default connect(null, mapDispathToProps)(TaskOutput);