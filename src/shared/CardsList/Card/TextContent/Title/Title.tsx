import React, {useState} from 'react';
import styles from './title.css';
import {Text} from "../../../../Text";
import {Post} from "../../Post";
import {Link, NavLink, Outlet} from "react-router-dom";

interface ITitleProps {
  title: string;
  id: string;
  subreddit_name_prefixed: string;
  selftext: string
}

export function Title({title, id,subreddit_name_prefixed,selftext}:ITitleProps) {


  return (
      <h2 className={styles.title}>
        <NavLink to={`/posts/${id}`} className={styles.postLink}>
          {title}
        </NavLink>
      </h2>
  );
}
