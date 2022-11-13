import React from 'react';
import styles from './userblock.css';
import {EIcons, Icon} from "../../../Icon";
import {Break} from "../../../Break";
import {EColor, Text} from "../../../Text";

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({avatarSrc,username,loading}:IUserBlockProps) {

  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=aGJ08IE9wFPBdQVuNdXuJg&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc.split('?')[0]} alt="user avatar" className={styles.avatarImage}/>
          : <Icon name={EIcons.anon}/>
        }
      </div>

      <div className={styles.username}>
        <Break size={12}/>
        {loading ? (
          <Text size={20} color={EColor.gray99}>Загрузка...</Text>
        ): (
          <Text size={20} color={username ? EColor.black : EColor.gray99}>{username || 'Аноним'}</Text>
        )}
      </div>
    </a>
  );
}
