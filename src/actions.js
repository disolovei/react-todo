export const ADD_TASK = 'ADD_TASK';
export const RESOLVE_TASK = 'RESOLVE_TASK';
export const UNRESOLVE_TASK = 'RESOLVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export function addTask(title, description) {
    return {
        type: ADD_TASK,
        title,
        description,
    };
}

export function resolveTask(taskID) {
    return {
        type: RESOLVE_TASK,
        taskID,
    };
}

export function unresolveTask(taskID) {
    return {
        type: UNRESOLVE_TASK,
        taskID,
    };
}

export function removeTask(taskID) {
    return {
        type: REMOVE_TASK,
        taskID,
    };
}