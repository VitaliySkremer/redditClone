import React from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {EmptyList} from "../EmptyList";
import { usePostsData} from "../../hooks/usePostsData";
import { Outlet } from 'react-router-dom';

export function CardsList() {

  const {list, isLoading, errorLoading, bottomOfList, countLoad, setCountLoad ,emptyFetch} = usePostsData();

  function handleClick(){
    setCountLoad();
  }

  return (
      <ul className={styles.cardsList}>
        {list.map(item =>
          <Card
            {...item}
            key={item.data.id}
          />)}

        {countLoad === 3 && !emptyFetch && (
          <div className={styles.button__wrapper}>
            <button className={styles.button__more} onClick={handleClick}>Загрузить ещё</button>
          </div>
        )}

        <div ref={bottomOfList}/>
        {emptyFetch && <p style={{textAlign: 'center', fontWeight:'bold', fontSize:'20px'}}>Посты закончились</p>}
        {isLoading && <p style={{textAlign: 'center'}}>Идёт загрузка...</p>}
        {errorLoading && <p role="alert" style={{textAlign: 'center'}}>{errorLoading}</p>}
        {!list.length && !isLoading && !errorLoading && (
          <EmptyList/>
        )}
        <Outlet />
      </ul>
  );
}
