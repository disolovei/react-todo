import { ADD_TASK, TOGGLE_RESOLVE, REMOVE_TASK, LOADED_DATA, FILTER_TASKS } from '../actionTypes';

export function addTask(item) {
    return {
        type: ADD_TASK,
        payload: { item },
    };
}

export function toggleResolve(taskID) {
    return {
        type: TOGGLE_RESOLVE,
        payload: {
            id: taskID
        },
    };
}

export function removeTask(taskID) {
    return {
        type: REMOVE_TASK,
        payload: {
            id: taskID
        },
    };
}

export function loadedData(data) {
    return {
        type: LOADED_DATA,
        payload: {
            data
        },
    };
}

export function filterTasks(rule) {
    return {
        type: FILTER_TASKS,
        payload: {
            rule,
        },
    };
}