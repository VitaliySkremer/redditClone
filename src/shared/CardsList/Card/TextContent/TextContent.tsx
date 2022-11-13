import React from 'react';
import styles from './textcontent.css';
import {UserLink} from "./UserLink";
import {Title} from "./Title";


interface ITextContentProps {
  author:string;
  title:string;
  community_icon:string;
  created: number;
  id: string;
  subreddit_name_prefixed: string;
  selftext: string
}

export function TextContent({author,title, community_icon,created,id,subreddit_name_prefixed,selftext}:ITextContentProps) {
  
  const culcDate = () =>{
    return Math.round((+new Date() - +new Date(created * 1000))/3600000);
  }
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink author={author} community_icon={community_icon}/>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {culcDate() > 4
            ? `${culcDate()} чаcов назад`
            : culcDate() === 0
              ? 'только что'
              : `${culcDate()} чаcа назад`}
        </span>
      </div>
      <Title selftext={selftext} subreddit_name_prefixed={subreddit_name_prefixed} id={id} title={title}/>
    </div>
  );
}
