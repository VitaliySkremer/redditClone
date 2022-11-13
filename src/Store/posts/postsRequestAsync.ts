import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import axios from "axios";
import {RootState} from "../InitialState";
import {
  postsCountLoad,
  postsEmptyFetch, postsFirstLoaded,
  postsNextAfter,
  postsRequest,
  postsRequestError,
  postsRequestSuccess
} from "../store";

export const postsRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) =>{
  dispatch(postsRequest())
  dispatch(postsFirstLoaded(false))
  axios.get('https://oauth.reddit.com/best.json?sr_detail=true',{
    headers:{Authorization: `bearer ${getState().token}`},
    params:{
      limit: 10,
      after: getState().nextAfter,
    }
  })
    .then(({data:{data:{after ,children}}})=>{
      dispatch(postsNextAfter(after))
      dispatch(postsRequestSuccess(children))
      if(!getState().nextAfter && !getState().firstLoaded) dispatch(postsEmptyFetch(true))
    })
    .catch((error)=>{
      dispatch(postsRequestError(String(error)))
    })
    .finally(()=>{
      dispatch(postsCountLoad(getState().countLoad + 1))
    })
}