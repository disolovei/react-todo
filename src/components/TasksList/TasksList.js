import React from 'react';
import { connect } from 'react-redux';
import TaskOutput from '../TaskOutput/TaskOutput';
import AddTask from '../AddTask/AddTask';

function TasksList({ tasks }) {
    return (
        <React.Fragment>
            <h1>Тудушка</h1>
            <AddTask />
            <h2>Список завдань</h2>
            {
                tasks.length
                ?   <ul className="task-list">
                        {
                            tasks.map((item, index) => <TaskOutput task={item} key={index} taskID={index}/>)
                        }
                    </ul>
                :   <p>Завдання відсутні...</p>
            }
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks,
    };
}

export default connect(mapStateToProps)(TasksList);