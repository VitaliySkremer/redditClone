import React, {useContext} from 'react';
import styles from './header.css';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock/>
      <ThreadTitle/>
      <SortBlock></SortBlock>
    </header>
  );
}
