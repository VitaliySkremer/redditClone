import React, {useRef, useState} from 'react';
import styles from './menu.css';
import {generateId} from "../../../../utils/react/generateRandomIndex";
import {DropDown} from "../../../DropDown";
import {MenuIcon} from "../../../icons";
import {EColor, Text} from "../../../Text";
import {MenuItemsList} from "./MenuItemsList";


const LIST = [
  { As:'li' as const, text: 'Комментарии',},
  { As:'li' as const, text: 'Поделиться', },
  { As:'li' as const, text: 'Скрыть', },
  { As:'li' as const, text: 'Сохранить', },
  { As:'li' as const, text: 'Пожаловаться', },
  { As:'li' as const, text: 'Закрыть', },
].map(generateId)

export function Menu() {

  const [list, setList]= useState(LIST);

  const handleItemClick = (text:string)=>{
    console.log(text);
  }

  const buttonMenu = (
    <button className={styles.menuButton}>
      <MenuIcon/>
    </button>
  )


  return (
    <div className={styles.menu}>
      <DropDown
        button={buttonMenu}
      >
        <div className={styles.dropdown}>
          <MenuItemsList postId={'123'}/>
          <button className={styles.closeButton}>
            <Text size={14} mobileSize={12} color={EColor.gray66}>
              Закрыть
            </Text>
          </button>
        </div>
      </DropDown>
    </div>
  );
}
