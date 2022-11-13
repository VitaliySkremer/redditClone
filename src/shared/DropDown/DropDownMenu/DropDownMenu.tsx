import React, {useEffect, useRef} from 'react';
import styles from './dropdownmenu.css';
import ReactDOM from "react-dom";

interface IDropDownMenuProps {
  children: React.ReactNode;
  onClose: ()=> void;
  position?:{
    left: number;
    top: number;
  }
}

export function DropDownMenu({children,onClose,position}:IDropDownMenuProps) {

  const ref = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    function handleClick(event: MouseEvent){
      if(event.target instanceof Node && !ref.current?.contains(event.target)){
        onClose();
      }
    }

    document.addEventListener('click', handleClick);

    return () =>{
      document.removeEventListener('click', handleClick);
    }
  },[])

  const node = document.getElementById('menu_root');
  if(!node) return null;

  return (
    ReactDOM.createPortal(
      <div ref={ref} style={{top: position?.top, left:position?.left,}} className={styles.listContainer}>
        <div className={styles.list} onClick={onClose}>
          {children}
        </div>
      </div>, node)
  );
}
