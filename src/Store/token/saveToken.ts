import {ThunkAction} from "redux-thunk";
import {RootState} from "../InitialState";
import {Action} from "redux";
import {setToken} from "../store";

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> =>(dispatch)=>{
  dispatch(setToken(window.__token__));
}