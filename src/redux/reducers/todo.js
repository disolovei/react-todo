import { ADD_TASK, TOGGLE_RESOLVE, REMOVE_TASK, LOADED_DATA, FILTER_TASKS } from '../actionTypes';

const initialState = {
    loaded: false,
    freeKey: 0,
    filter: 'all',
    taskList: {},
};

export default ( state = initialState, action ) => {
    switch( action.type ) {
        case LOADED_DATA:
            const { data } = action.payload;
            return {
                ...state,
                loaded: true,
                freeKey: Math.max(...Object.keys(data)) + 1,
                taskList: { ...data }
            };
        case ADD_TASK:
            const { title, description } = action.payload;
            const { freeKey } = state;          
            return {
                ...state,
                freeKey: freeKey + 1,
                taskList: { 
                    ...state.taskList, 
                    [freeKey] : { title, description, resolved: false }
                 },
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
