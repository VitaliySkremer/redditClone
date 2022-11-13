import {ThunkAction} from "redux-thunk";
import {RootState} from "../InitialState";
import {Action} from "redux";
import {meRequest, meRequestError, meRequestSuccess} from "../store";
import axios from "axios";

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> =>(dispatch, getState)=>{
  dispatch(meRequest())
  axios.get('https://oauth.reddit.com/api/v1/me.json',{
    headers:{
      Authorization: `bearer ${getState().token}`,
    }
  })
    .then((resp)=>{
      const userData = resp.data;
      dispatch(meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }))
    })
    .catch((error)=>{
      console.log(error);
      dispatch(meRequestError(String(error)))
    });
}