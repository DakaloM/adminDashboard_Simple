import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export const login = async(dispatch, user) => {
    dispatch(loginStart(user));
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch(e){
        dispatch(loginFailure());
    }
}