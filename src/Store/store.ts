import {ActionCreator, Reducer} from "redux";
import {Actions} from "./Actions";
import {initialState, RootState} from "./InitialState";
import {MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction} from "./me/typeMeRequestAction";
import {IUserData} from "../hooks/useUserData";
import {meReducer} from "./me/meReducer";
import {UpdateToken} from "./token/typeTokenAction";
import {UpdateAction} from "./comment/typeCommentAction";
import {
  countLoad,
  emptyFetch,
  firstLoaded,
  IPostData,
  nextAfter,
  RequestErrorPosts,
  RequestPosts,
  RequestSuccessPosts
} from "./posts/typePosts";
import {postsReducer} from "./posts/postsReducer";

//Token
export const setToken: ActionCreator<UpdateToken> = (text: string)=>({
  type:Actions.UPDATE_TOKEN, text:text
});
//ME
export const meRequest: ActionCreator<MeRequestAction> = () =>({
  type: Actions.ME_REQUEST
})
export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) =>({
  type: Actions.ME_REQUEST_SUCCESS,
  data,
})
export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) =>({
  type: Actions.ME_REQUEST_ERROR,
  error,
})
//Posts
export const postsRequest: ActionCreator<RequestPosts> = () =>({
  type:Actions.POSTS_REQUEST
})
export const postsRequestSuccess: ActionCreator<RequestSuccessPosts> = (data:IPostData[]) =>({
  type:Actions.POSTS_REQUEST_SUCCESS,
  data,
})
export const postsRequestError: ActionCreator<RequestErrorPosts> = (error: string) =>({
  type:Actions.POSTS_REQUEST_ERROR,
  error,
})
export const postsNextAfter: ActionCreator<nextAfter> = (nextAfter: string) =>({
  type:Actions.NEXT_AFTER,
  nextAfter,
})
export const postsCountLoad: ActionCreator<countLoad> = (countLoad: number) =>({
  type:Actions.COUNT_LOAD,
  countLoad,
})
export const postsFirstLoaded: ActionCreator<firstLoaded> = (firstLoaded: boolean) =>({
  type:Actions.FIRST_LOAD,
  firstLoaded,
})
export const postsEmptyFetch: ActionCreator<emptyFetch> = (emptyFetch: boolean) =>({
  type:Actions.EMPTY_FETCH,
  emptyFetch,
})

type MyType = UpdateAction |
              UpdateToken |
              MeRequestAction |
              MeRequestSuccessAction |
              MeRequestErrorAction |
              RequestPosts |
              RequestSuccessPosts |
              RequestErrorPosts |
              nextAfter |
              countLoad |
              firstLoaded |
              emptyFetch

export const rootReducer:Reducer<RootState, MyType> = (state = initialState, action) =>{
  switch (action.type){
    case Actions.UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case Actions.UPDATE_TOKEN:
      return {
        ...state,
        token: action.text
      };
    case Actions.ME_REQUEST:
    case Actions.ME_REQUEST_SUCCESS:
    case Actions.ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action)
      }
    case Actions.POSTS_REQUEST:
    case Actions.POSTS_REQUEST_ERROR:
    case Actions.POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        posts: postsReducer(state.posts, action)
      }
    case Actions.NEXT_AFTER :
      return {
        ...state,
        nextAfter: action.nextAfter
      }
    case Actions.COUNT_LOAD:
      return {
        ...state,
        countLoad: action.countLoad
      }
    case Actions.FIRST_LOAD:
      return {
        ...state,
        firstLoaded: action.firstLoaded
      }
    case Actions.EMPTY_FETCH:
      return {
        ...state,
        emptyFetch: action.emptyFetch
      }
    default:
      return state;
  }
}