import React from 'react';
import { connect } from 'react-redux';
import TaskOutput from '../TaskOutput/TaskOutput';
import TaskFilter from '../TaskFilter/TaskFilter';

function TasksList({ tasks, currentFilter }) {
    //TODO
    const prepareTasks = () => {
        let filtered = {};

        if ( 'done' === currentFilter ) {
            for ( let i in tasks ) {
                if ( tasks[i].resolved ) {
                    filtered[i] = { ...tasks[i] };
                }
            }
        } else if ( 'undone' === currentFilter ) {
            for ( let i in tasks ) {
                if ( ! tasks[i].resolved ) {
                    filtered[i] = { ...tasks[i] };
                }
            }
        } else {
            filtered = { ...tasks };
        }

        return filtered;
    };

    const preparedTasks = prepareTasks();

    return (
        <React.Fragment>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Список завдань</h2>
                <TaskFilter />
            </header>
            {
                preparedTasks && Object.keys(preparedTasks).length
                ?   <ul className="task-list">
                        {Object.keys(preparedTasks).map((item) => <TaskOutput task={preparedTasks[item]} key={item} taskID={item}/>) }
                    </ul>
                :   <p>Завдання відсутні...</p>
            }
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {
        tasks: state.taskList,
        currentFilter: state.filter,
    };
}

export default connect(mapStateToProps)(TasksList);