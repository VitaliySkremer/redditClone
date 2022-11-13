import React, {useMemo} from 'react';
import styles from './icon.css';
import {BlockIcon,CommentIcon,SaveIcon,ShareIcon,WarningIcon,IconAnon} from "../icons";

type ISize = 12 | 14 | 16 | 50 | 100;


export enum EIcons {
  block = 'BlockIcon',
  comment = 'CommentIcon',
  save = 'SaveIcon',
  share = 'ShareIcon',
  warning = 'WarningIcon',
  anon = 'IconAnon',
}

interface IIconProps {
  name: EIcons;
  size?: ISize;
}



export function Icon({name,size = 50}:IIconProps) {
  const renderSwitchIcon = (icon: string):React.ReactNode =>{
    switch (icon){
      case EIcons.block: return BlockIcon({size});
      case EIcons.comment: return CommentIcon({size});
      case EIcons.save: return SaveIcon({size});
      case EIcons.share: return ShareIcon({size});
      case EIcons.warning: return WarningIcon({size});
      case EIcons.anon: return IconAnon({size});
    }
  }
  const IconsStyle = {
    width: size,
    height: size,
    viewBox: "0 0 100 100"
  }

  return (
    <>
      {renderSwitchIcon(name)}
    </>
  );
}
