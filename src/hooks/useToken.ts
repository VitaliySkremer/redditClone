import {useEffect} from "react";
import {saveToken} from "../Store/token/saveToken";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Store/InitialState";

export function useToken() {
  const token = useSelector<RootState, string>(state=> state.token)
  const dispatch = useDispatch<any>();
  useEffect(()=>{
    if(window.__token__ !== 'undefined'){
      dispatch(saveToken());
    }
  },[])

  return [token];
}