import { Link, useLocation } from 'react-router-dom'
import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi"

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

    return (
        <header className='bg-black py-5 fixed left-0 right-0 top-0'>
            <div className='container m-auto grid grid-cols-5 gap-4 text-white'>
                <p className='col-span-1 text-2xl text-gray-400 text-center'>JDo</p>

                <ul className="col-span-3 text-center">
                    {links.map(link => (
                        <li
                            key={link.label}
                            className={`${pathname === link.href ? "text-primary" : "text-white"} inline-block mx-5 transition-all hover:text-primary`}
                        >
                            <Link to={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>

                <ul className="col-span-1 text-center">
                    {socials.map(social => (
                        <li key={social.name} className='inline-block mx-2 transition-all hover:text-primary'>
                            <Link to={social.href} target='_blank'>{social.icon}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header