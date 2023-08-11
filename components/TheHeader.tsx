import Link from "next/link";
import Image from "next/image";
import Logo from  "../public/img/buff-logo.png"

const TheHeader = () => {
    return (
        <header>
            <div className={'container mx-auto header'}>
                <div className={'logo'}>
                    <Image alt={"logo"} src={Logo}/>
                </div>
                <nav>
                    <Link href={"/"}>Афиша</Link>
                    <Link href={"/"}>Новости</Link>
                    <Link href={"/"}>Билеты</Link>
                    <Link href={"/"}>О театре</Link>
                </nav>
                <div className={'header-search'}>

                </div>
            </div>
            <div className={'mega-menu'}>

            </div>
        </header>
    )
}

export {TheHeader}