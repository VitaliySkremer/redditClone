import React, {useState} from 'react';
import styles from './userlink.css';

interface IUserLinkProps {
  author:string;
  community_icon?: string
}

export function UserLink({author,community_icon}:IUserLinkProps) {
  return (
    <div className={styles.userLink}>
      {community_icon ?
        <img className={styles.avatar} src={community_icon.split('?')[0]} alt="avatar"/>
        :
        <img className={styles.avatar} src="https://cdn.dribbble.com/userupload/2903883/file/original-5ed351ed1425fcd9f54bfae3d88e3c50.jpg?compress=1&resize=400x300&vertical=top" alt="avatar"/>
      }
      <a href="#user-url" className={styles.username}>{author}</a>
    </div>
  );
}
