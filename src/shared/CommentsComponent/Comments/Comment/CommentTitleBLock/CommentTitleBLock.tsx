import React from 'react';
import styles from './CommentTitleBLock.css';

interface ICommentFormProps {
  author: string;
  created: number;
  subreddit: string;
  body: string;
}

export function CommentTitleBLock({author, created, subreddit, body}: ICommentFormProps) {

  const culcDate = () =>{
    return Math.round((+new Date() - +new Date(created * 1000))/3600000);
  }

  return (
    <div className={styles.commentForm}>
      <div className={styles.commentForm__title}>
        <img className={styles.commentForm__titleAvatar} src="https://cdn.dribbble.com/userupload/3157141/file/original-309517e7a7a14a789c71ff002391f0f7.jpg?compress=1&resize=450x338&vertical=top" alt={author}/>
        <span className={styles.commentForm__title_Author}>
          {author} <span className={styles.commentForm__title_Date}>
          {culcDate() > 4
            ? `${culcDate()} чаcов назад`
            : culcDate() === 0
              ? 'Только что'
            : `${culcDate()} чаcа назад`}</span>
        </span>
        <span className={styles.commentForm__title_Subreddit}>{subreddit}</span>
      </div>
      <div>
        <p className={styles.commentForm__Body_Text}>{body}</p>
      </div>
    </div>
  );
}
