import React, {useState} from 'react';
import styles from './Comments.css';
import {CommentTitleBLock} from "./Comment/CommentTitleBLock";
import {CommentRollUp} from "./Comment/CommentRollUp";
import {CommentMenu} from "./Comment/CommentMenu";
import {Comment} from "./Comment";

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

export function Comments({children}:ICommentChildrenListProps) {

  const [list, setList] = useState(children.filter(item=>item.kind!=='more'))

  return (
    <>
      {list.map(item=>
        <Comment kind={item.kind} data={item.data} key={item.data.created}/>
      )}
    </>
  );
}
