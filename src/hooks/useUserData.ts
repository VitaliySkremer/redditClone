import { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Store/InitialState";
import {meRequestAsync} from "../Store/me/meRequestAsync";

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData(){
  const data = useSelector<RootState, IUserData>(state=> state.me.data)
  const loading = useSelector<RootState, boolean>(state=> state.me.loading)
  const token = useSelector<RootState, string>(state=> state.token)

  const dispatch = useDispatch<any>();

  useEffect(()=>{
    if(token.length > 0 && token !== 'undefined'){
      dispatch(meRequestAsync());
    }
  },[token]);

  return {data, loading};
}