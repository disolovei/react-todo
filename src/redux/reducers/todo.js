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
            return {
                ...state,
                taskList: { 
                    ...state.taskList,
                    [id]: {
                        ...state.taskList[id],
                        resolved: ! state.taskList[id].resolved,
                    },
                },
            };
        case REMOVE_TASK:
            const { id: removeId } = action.payload;
            const { taskList: tasks } = state;

            console.log(removeId);

            delete tasks[removeId];

            return {
                ...state,
                taskList: {
                    ...tasks
                }
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
