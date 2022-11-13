import React, {useEffect, useRef} from 'react';
import styles from './post.css';
import ReactDOM from "react-dom";
import {CommentForm} from "../../../CommentForm";
import {CommentsComponent} from "../../../CommentsComponent";
import {useNavigate} from "react-router-dom";
import { useGetPost } from '../../../../hooks/useGetPost';

export function Post() {
  const ref = useRef<HTMLDivElement>(null);
  const history = useNavigate();
  const [post] = useGetPost();

  useEffect(()=>{
    function handleClick(event: MouseEvent){
      if(event.target instanceof Node && !ref.current?.contains(event.target)){
        history('/posts')
      }
    }
    document.addEventListener('click', handleClick);
    return () =>{
      document.removeEventListener('click', handleClick);
    }
  },[]);

  const node = document.getElementById('modal_root');
  if(!node) return null;

  if(!post){
    return (
      <div className={styles.modal} ref={ref}>
        Не удалось найти пост:(
      </div>
    )
  }

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <h2>{post.data.title}</h2>
      <div className={styles.content}>
        <p>{post.data.selftext}</p>
      </div>
      <CommentForm/>
      <CommentsComponent subreddit_name_prefixed={post.data.subreddit_name_prefixed} id={post.data.id}/>
    </div>
  ), node);
}
