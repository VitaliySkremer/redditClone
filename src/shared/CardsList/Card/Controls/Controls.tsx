import React from 'react';
import styles from './controls.css';
import {KarmaCounter} from "./KarmaCounter";
import {ComentsNumber} from "./ComentsNumber";
import {Actions} from "./Actions";

interface IControlsProps {
  ups:number;
  num_comments: number;
}

export function Controls({ups,num_comments}:IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter ups={ups}/>
      <ComentsNumber num_comments={num_comments}/>
      <Actions/>
    </div>
  );
}
