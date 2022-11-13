import {Reducer} from "redux";
import {MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction} from "./typeMeRequestAction";
import {Actions} from "../Actions";
import {initialState, MeState} from "../InitialState";


type MeActions = MeRequestAction | MeRequestSuccessAction | MeRequestErrorAction

export const meReducer: Reducer<MeState, MeActions> = (state = initialState.me, action) =>{
  switch (action.type){
    case Actions.ME_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case Actions.ME_REQUEST_ERROR :
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case Actions.ME_REQUEST_SUCCESS :
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    default: return state
  }
}