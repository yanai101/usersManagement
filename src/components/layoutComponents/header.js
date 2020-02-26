import React from "react";
import style from './header.module.scss';


function AppHeader() {
  return (
    <nav className={style.headerNav} date-testid="header">
        Users App 
    </nav>
  );
}

export default AppHeader;
