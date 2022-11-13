import React, {useRef, useState} from 'react';
import styles from './dropdown.css';
import ReactDOM from "react-dom";
import {DropDownMenu} from "./DropDownMenu";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function DropDown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsdropdownOpen] = React.useState(isOpen);
  const [menuPosition, setMenuPosition] = useState({left:0, top:0})
  React.useEffect(()=> setIsdropdownOpen(isOpen),[isOpen]);
  React.useEffect(()=> isDropdownOpen ? onOpen() : onClose(),[isDropdownOpen]);

  const refButton = useRef<HTMLDivElement>(null)

  const handleOpen = () =>{
    if(isOpen === undefined) {
      const coordinates = refButton.current?.getBoundingClientRect();
      const left: number = (coordinates?.x || 0) + (coordinates?.width || 0) + window.scrollX;
      const top: number = (coordinates?.y || 0) + window.scrollY
      setMenuPosition({ left: left, top: top });
      setIsdropdownOpen(!isDropdownOpen);
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen} ref={refButton}>
        {button}
      </div>
      {isDropdownOpen && (
        <DropDownMenu
          children={children}
          onClose={()=> setIsdropdownOpen(false)}
          position={menuPosition}
        />
      )}
    </div>
  )
}
