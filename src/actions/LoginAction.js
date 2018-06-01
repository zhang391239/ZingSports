import CreateAction from './ActionManagers';
import * as types from '../ActionTypes';
export default function LoginAction(lst) {
    
    return (dispatch) => {
        dispatch(CreateAction(types.USER_LOGIN_START, "start", "正在登陆...", lst));
        alert("login action");
        //setImmediate(() => { dispatch(CreateAction(types.USER_LOGIN_SUCCESS, "end", "退出登陆...", lst)); }, 2000);

    }
}