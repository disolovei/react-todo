import { ADD_TASK, UNRESOLVE_TASK, RESOLVE_TASK, REMOVE_TASK } from './actions';

const initialState = {
    tasks: [
        {
            title: 'Створити додаток на React',
            description: 'Порожньо',
            resolved: true,
        },
        {
            title: 'Пофіксити баг із ре-рендерингом списку завдань',
            description: 'Порожньо',
            resolved: false,
        },
        {
            title: 'Пофіксити баг із ре-рендерингом списку завдань',
            description: 'Порожньо',
            resolved: false,
        },
    ],
};

export default function(state = initialState, action) {
    const tasks = state.tasks;

    console.log(action.type);
    
    switch (action.type) {
        case RESOLVE_TASK:
            if ( 'undefined' === typeof tasks[action.taskID] ) {
                return state;
            }

            state.tasks[action.taskID].resolved = true;

            return state;
        case UNRESOLVE_TASK:
            if ( 'undefined' === typeof tasks[action.taskID] ) {
                return state;
            }

            state.tasks[action.taskID].resolved = false;

            return state;
        case ADD_TASK:
            const newTask = [{
                title: action.title,
                description: action.description,
            }];

            return {
                tasks: newTask.concat(tasks),
            };
        case REMOVE_TASK:
            const taskID = action.taskID;
            
            if ( 'undefined' === typeof tasks[taskID] ) {
                return state;
            }

            tasks.splice(taskID, 1);

            return {
                tasks: [...tasks]
            };
        default: 
            return state;
    }
}