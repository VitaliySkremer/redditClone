import React from 'react';
import styles from './emptylist.css';
import {Text} from "../Text";

export function EmptyList() {
  return (
    <div className={styles.empty__text}>
      <Text mobileSize={16} size={28}>Хмм... здесь пока пусто</Text>
    </div>
  );
}
