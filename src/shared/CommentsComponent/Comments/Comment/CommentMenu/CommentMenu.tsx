import React, {useState} from 'react';
import {EIcons, Icon} from "../../../../Icon";
import {EColor, Text} from "../../../../Text";
import styles from "./commentmenu.css";
import {Break} from "../../../../Break";
import {CommentForm} from "../../../../CommentForm";


interface ICommentMenuProps {
  onOpenToggle:()=> void;
}

export function CommentMenu({onOpenToggle}:ICommentMenuProps) {

  return (
    <ul className={styles.commentMenu__list}>
      <li className={styles.commentMenu__list_Item}>
        <button onClick={onOpenToggle} className={styles.commentMenu__list_Item_btn}>
          <Icon name={EIcons.comment} size={14}/>
          <Break size={6}/>
          <Text size={12} desktopSize={14} tabletSize={14} color={EColor.gray99}>Ответить</Text>
        </button>
      </li>
      <li className={styles.commentMenu__list_Item}>
        <button className={styles.commentMenu__list_Item_btn}>
          <Icon name={EIcons.share} size={14}/>
          <Break size={6}/>
          <Text size={12} desktopSize={14} tabletSize={14} color={EColor.gray99}>Поделиться</Text>
        </button>
      </li>
      <li className={styles.commentMenu__list_Item}>
        <button className={styles.commentMenu__list_Item_btn}>
          <Icon name={EIcons.warning} size={14}/>
          <Break size={6}/>
          <Text size={12} desktopSize={14} tabletSize={14} color={EColor.gray99}>Пожаловаться</Text>
        </button>
      </li>
    </ul>
  );
}
