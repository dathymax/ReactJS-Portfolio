import { Link, useLocation } from 'react-router-dom'
import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai"

const links = [
    {
        label: "Home",
        href: "/home",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Project",
        href: "/project",
    },
]

const socials = [
    {
        name: "facebook",
        icon: <BiLogoFacebook />,
        href: "https://www.facebook.com/dotuandat25092000"
    },
    {
        name: "linkedin",
        icon: <BiLogoLinkedin />,
        href: "https://www.linkedin.com/in/tu%E1%BA%A5n-%C4%91%E1%BA%A1t-%C4%91%E1%BB%97-514baa20b/"
    },
    {
        name: "github",
        icon: <BiLogoGithub />,
        href: "https://github.com/dathymax"
    },
]

const Header = () => {
    const { pathname } = useLocation();
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(true);
    }

    const handleHideMenu = () => {
        setShowMenu(false);
    }

    console.log(showMenu)

    return (
        <header className='bg-black py-5 fixed left-0 right-0 top-0'>
            <div className='relative container m-auto flex items-center justify-between xl:grid xl:grid-cols-5 gap-4 text-white px-5'>
                <p className='col-span-1 text-2xl text-gray-400 text-center'>JDo</p>

                <ul className="col-span-3 text-center hidden lg:block">
                    {links.map(link => (
                        <li
                            key={link.label}
                            className={`${pathname === link.href ? "text-primary" : "text-white"} inline-block mx-5 transition-all hover:text-primary`}
                        >
                            <Link to={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>

                <ul className="col-span-1 text-center hidden lg:block">
                    {socials.map(social => (
                        <li key={social.name} className='inline-block mx-2 transition-all hover:text-primary'>
                            <Link to={social.href} target='_blank'>{social.icon}</Link>
                        </li>
                    ))}
                </ul>

                <GiHamburgerMenu
                    onClick={handleShowMenu}
                    className="cursor-pointer text-2xl lg:hidden"
                />

                <div className={`${showMenu ? "right-0" : "-right-96 hidden"} absolute z-50 bg-gray-700 transition-all h-screen w-[200px] -top-5 shadow-sm`}>
                    <p className='flex items-center justify-end p-4 w-full'>
                        <AiOutlineCloseCircle onClick={handleHideMenu} />
                    </p>

                    <ul className="text-center lg:hidden">
                        {links.map(link => (
                            <li
                                key={link.label}
                                className={`${pathname === link.href ? "text-primary" : "text-white"} block my-5 transition-all hover:text-primary`}
                            >
                                <Link to={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>

                    <ul className="text-center lg:hidden">
                        {socials.map(social => (
                            <li key={social.name} className='inline-block mx-2 transition-all hover:text-primary'>
                                <Link to={social.href} target='_blank'>{social.icon}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    onClick={handleHideMenu}
                    className={`${showMenu ? "block" : "hidden"} fixed z-20 w-screen h-screen top-0 left-0`}></div>
            </div>
        </header>
    )
}

export default Header