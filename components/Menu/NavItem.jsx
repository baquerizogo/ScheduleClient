import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem = (props) => {
    const router = useRouter();

    return (  
        <li className={router.pathname === props.path ? 'active nav-item' : 'nav-item'}>
            <Link href={props.path}>
                <a className="d-flex align-items-center" >
                    {props.children}
                    <span className="menu-title text-truncate" data-i18n={props.text}>{props.text}</span>
                </a>
            </Link>
        </li>
    );
}
 
export default NavItem;