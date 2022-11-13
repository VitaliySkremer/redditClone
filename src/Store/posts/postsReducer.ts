import {Reducer} from "react";
import { Actions } from "../Actions";
import {initialState, postsState} from "../InitialState";
import {RequestErrorPosts, RequestPosts, RequestSuccessPosts} from "./typePosts";

type postsAction = RequestPosts | RequestSuccessPosts | RequestErrorPosts

export const postsReducer: Reducer<postsState, postsAction> = (state = initialState.posts, action ) =>{
  switch (action.type){
    case Actions.POSTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case Actions.POSTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case Actions.POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        data: state.data.concat(...action.data),
        loading: false
      }
    default: return state
  }
}