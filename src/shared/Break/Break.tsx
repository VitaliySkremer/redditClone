import React from 'react';
import styles from './break.css';
import classNames from "classnames";

type TBreakSize = 4 | 6 | 8 | 12 | 16 | 20;
type TDisplay = 'mobile' | 'tablet' | 'desktop';

interface IBreakProps {
  size: TBreakSize;
  mobileSize?: TBreakSize;
  tabletSize?: TBreakSize;
  desktopSize?: TBreakSize;
  inline?: boolean;
  top?: boolean;
}

export function Break(props: IBreakProps) {
  const {
    inline = false,
    top = false,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    {[styles[`mobile_s${mobileSize}`]]: mobileSize},
    {[styles[`mobile_t${tabletSize}`]]: tabletSize},
    {[styles[`mobile_d${desktopSize}`]]: desktopSize},
    {[styles.inline]: inline},
    {[styles.top]: top},
  )
  return (
    <div className={classes}></div>
  );
}
