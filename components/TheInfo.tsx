'use client'
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/img/buff-logo.png"
import {useState} from "react";

const TheInfo = () => {
  const [isHover, setValue] = useState(false);

  const mouseEnter = () => {
    return setValue(true)
  };
  const mouseLeave = () => {
    //const menu = document.querySelector('.mega-menu')
    return setValue(false)
  };

  return (
    <header onMouseLeave={mouseLeave}>
    <div className={'container mx-auto header'}>
    <div className={'logo'}>
    <Image alt={"logo"} src={Logo}/>
  </div>
  <nav>
  <Link onMouseEnter={mouseEnter} href={"/"}>Афиша</Link>
    <Link onMouseEnter={mouseEnter} href={"/"}>Новости</Link>
    <Link onMouseEnter={mouseEnter} href={"/"}>Билеты</Link>
    <Link onMouseEnter={mouseEnter} href={"/"}>О театре</Link>
  </nav>
  <div className={'header-search'}>

    </div>
    </div>
    <div hidden={!isHover} className={'mega-menu'}>
  <div className={'content'}>
    <h1>Менюшка</h1>
    </div>
    </div>
    </header>
)
}

export {TheInfo}
