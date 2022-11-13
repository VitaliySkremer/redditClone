import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  banner_img: string;
}
export function Preview({banner_img}: IPreviewProps) {

  const emptyImg = {
    backgroundColor: '#F3F3F3',
  }

  return (
    <div className={styles.preview}>
      {banner_img?.length ?
        <img src={banner_img} className={styles.previewImg} />
        :
        <div style={emptyImg} className={styles.previewImg}/>
      }
    </div>
  );
}
