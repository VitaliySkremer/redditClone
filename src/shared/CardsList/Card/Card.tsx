import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";
import {IPostData} from "../../../Store/posts/typePosts";


export function Card({data}:IPostData) {
  return (
  <li className={styles.card}>
    <TextContent
      subreddit_name_prefixed={data.subreddit_name_prefixed}
      id={data.id}
      created={data.created}
      author={data.author}
      title={data.title}
      community_icon={data.sr_detail.community_icon}
      selftext={data.selftext}
    />
    <Preview banner_img={data.sr_detail.banner_img}/>
    <Menu/>
    <Controls ups={data.ups} num_comments={data.num_comments}/>
  </li>
  );
}
