import { ADD_TASK, TOGGLE_RESOLVE, REMOVE_TASK, LOADED_DATA, FILTER_TASKS } from '../actionTypes';

const initialState = {
    loaded: false,
    filter: 'all',
    taskList: [],
};

export default ( state = initialState, action ) => {
    switch( action.type ) {
        case LOADED_DATA:
            const { data } = action.payload;
            return {
                ...state,
                loaded: true,
                taskList: [ ...data ]
            };
        case ADD_TASK:
            const { ...addedItem } = action.payload.item;         
            return {
                ...state,
                taskList: [ { ...addedItem }, ...state.taskList],
            };
        case TOGGLE_RESOLVE:
            const { id } = action.payload;
            const { taskList: unResolvedTasks } = state;

            for ( let index in unResolvedTasks ) {
                if ( unResolvedTasks[index]._id !== id ) {
                    continue;
                }

                unResolvedTasks[index] = {
                    ...unResolvedTasks[index],
                    resolved: !unResolvedTasks[index].resolved
                };
                break;
            }

            return {
                ...state,
                taskList: [...unResolvedTasks],
            };
        case REMOVE_TASK:
            const { id: removeId } = action.payload;
            const { taskList: tasks } = state;

            const newTaskList = tasks.filter(item => item._id !== removeId);

            return {
                ...state,
                taskList: [...newTaskList]
            };
        case FILTER_TASKS:
            const { rule } = action.payload;
            return {
                ...state,
                filter: rule,
            };
        default:
            return state;
    }
}
