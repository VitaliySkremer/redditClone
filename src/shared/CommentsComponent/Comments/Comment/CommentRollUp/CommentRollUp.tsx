import React from 'react';
import styles from './commentrollup.css';

export function CommentRollUp() {
  return (
    <div className={styles.commentRollup}>
      <div className={styles.commentButtons}>
        <button className={styles.up}>
          <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
          </svg>
        </button>
        <button className={styles.down}>
          <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
          </svg>
        </button>
      </div>
      <div className={styles.commentLine}/>
    </div>
  );
}
