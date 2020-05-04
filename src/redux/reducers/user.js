import { USER_LOGIN, USER_LOGOUT } from "../actionTypes";

const initialState = {
    authorized: false,
    data: {
        login: "",
        email: "",
        password: "",
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            const { loginAuth, passwordAuth } = action.payload;
            return {
                ...state,
                authorized: true,
                data: {
                    ...state.data,
                    login: loginAuth,
                    password: passwordAuth,
                },
            };
        case USER_LOGOUT:
            return { ...initialState };
        default:
            return state;
    }
};
