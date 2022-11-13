import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Store/InitialState";
import {postsRequestAsync} from "../Store/posts/postsRequestAsync";
import { IPostData } from "../Store/posts/typePosts";
import {postsCountLoad} from "../Store/store";


export function usePostsData(){

  const list = useSelector<RootState,IPostData[]>(state=> state.posts.data)
  const isLoading = useSelector<RootState, boolean>(state=> state.posts.loading)
  const errorLoading = useSelector<RootState, string>(state=> state.posts.error)
  const nextAfter = useSelector<RootState, string>(state=> state.nextAfter);
  const countLoad = useSelector<RootState,number>(state=> state.countLoad)
  const emptyFetch = useSelector<RootState, boolean>(state => state.emptyFetch)
  const bottomOfList = useRef<HTMLDivElement>(null);
  const token = useSelector<RootState, string>(state=> state.token)

  const dispatch = useDispatch<any>()

  const setCountLoad = () =>{
    dispatch(postsCountLoad(0))
  }

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting && countLoad < 3 && token.length > 0 && token !== 'undefined' && !emptyFetch){
        dispatch(postsRequestAsync());
      }
    }, {rootMargin: '200px'});

    if(bottomOfList.current) observer.observe(bottomOfList.current);

    return ()=> {
      if(bottomOfList.current) observer.unobserve(bottomOfList.current);
    }
  },[token, nextAfter, bottomOfList.current, countLoad])

  return {list, isLoading, errorLoading, bottomOfList, countLoad,setCountLoad, emptyFetch};
}