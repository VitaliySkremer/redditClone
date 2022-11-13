import React from 'react';
import {EColor, Text} from "../../../../Text";
import styles from "./menuitemslist.css";
import {EIcons, Icon} from "../../../../Icon";
import classNames from 'classnames';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }:IMenuItemsListProps) {
  const classesMenuItemAdaptive = classNames(
    styles[`menuItem`],
    styles[`ItemNone`]
  );

  const classesMenuDividerAdaptive = classNames(
    styles['divider'],
    styles['ItemNone']
  );
  return (
    <ul className={styles.menuItemsList}>
      <li className={classesMenuItemAdaptive}  onClick={()=> console.log(postId)}>
        <Icon name={EIcons.comment} size={14}></Icon>
        <Text size={12} desktopSize={14} tabletSize={14} color={EColor.gray99}>Комментарии</Text>
      </li>
      <div className={classesMenuDividerAdaptive}/>
      <li className={classesMenuItemAdaptive} onClick={()=> console.log(postId)}>
        <Icon name={EIcons.share} size={14}></Icon>
        <Text size={12} desktopSize={14} tabletSize={14} color={EColor.gray99}>Поделиться</Text>
      </li>
      <div className={classesMenuDividerAdaptive}/>
      <li className={styles.menuItem} onClick={()=> console.log(postId)}>
        <Icon name={EIcons.block} size={14}></Icon>
        <Text size={12} desktopSize={14} tabletSize={14} color={EColor.gray99}>Скрыть</Text>
      </li>
      <div className={classesMenuDividerAdaptive}/>
      <li className={classesMenuItemAdaptive} onClick={()=> console.log(postId)}>
        <Icon name={EIcons.save} size={14}></Icon>
        <Text size={12} desktopSize={14} tabletSize={14} color={EColor.gray99}>Сохранить</Text>
      </li>
      <div className={styles.divider}/>
      <li className={styles.menuItem}>
        <Icon name={EIcons.warning} size={14}></Icon>
        <Text size={12} desktopSize={14} tabletSize={14} color={EColor.gray99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
