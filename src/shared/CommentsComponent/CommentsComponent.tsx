import React, {useEffect, useState} from 'react';
import styles from './CommentsComponent.css';
import axios from "axios";
import {Comments} from "./Comments";
import {useSelector} from "react-redux";
import {RootState} from "../../Store/InitialState";

interface ICommentsProps {
  id: string;
  subreddit_name_prefixed: string;
}


export function CommentsComponent({id,subreddit_name_prefixed}:ICommentsProps) {

  const token = useSelector<RootState, string>(state=> state.token)
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setIsLoading(true)
    axios.get(`https://oauth.reddit.com/${subreddit_name_prefixed}/comments/${id}`,{
      headers:{
        Authorization: `bearer ${token}`,
      }
    }).then((response)=>{
      setList(response.data[1].data.children);
    }).finally(()=> setIsLoading(false))
  },[])

  return (
    (isLoading
      ? <h2>Идёт загрузка комментариев...</h2>
      : <Comments children={list}/>
    )
  );
}
