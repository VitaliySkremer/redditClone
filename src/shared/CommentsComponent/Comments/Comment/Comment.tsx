import React, {useState} from 'react';
import styles from './comment.css';
import {CommentRollUp} from "./CommentRollUp";
import {CommentTitleBLock} from "./CommentTitleBLock";
import {CommentMenu} from "./CommentMenu";
import { Comments } from '../Comments';
import {CommentForm} from "../../../CommentForm";


interface ICommentsData{
  data:{
    author: string;
    body: string;
    created: number;
    subreddit: string;
    replies: {
      data: ICommentChildrenListProps;
    }
  }
  kind: string;
}

interface ICommentChildrenListProps{
  children: ICommentsData[];
}

export function Comment({data}:ICommentsData) {

  const [isActiveCommentForm, setIsActiveCommentForm] = useState(false);

  const handleClick = ()=>{
    setIsActiveCommentForm(!isActiveCommentForm);
  }

  return (
    <div className={styles.comment} key={data.created}>
      <div className={styles.comment__rollup}>
        <CommentRollUp/>
      </div>
      <div className={styles.comment__content}>
        <CommentTitleBLock
          body={data.body}
          author={data.author}
          subreddit={data.subreddit}
          created={data.created}
        />
        <CommentMenu onOpenToggle={handleClick}/>
        {isActiveCommentForm && <CommentForm author={data.author}/>}
        {typeof data.replies === 'object'
          ? <Comments children={data.replies.data.children}/>
          : <></>
        }
      </div>
    </div>
  );
}
