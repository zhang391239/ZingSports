import * as types from '../ActionTypes';

const initialState = {
    status: "start",
    isLogin: false,
    bean: null,
    message: "",
}

export default function AccountReducer(state = initialState, action) {
    switch (action.type) {
        case types.USER_LOGIN_START:
            return Object.assign({}, state, {
                status: "start",
                isLogin: false,
                bean: action.bean,
                message: action.message,
            });
        case types.USER_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                status: "success",
                isLogin: true,
                bean: action.bean,
                message: action.message,
            });
        default:
            return state;
    }
}
