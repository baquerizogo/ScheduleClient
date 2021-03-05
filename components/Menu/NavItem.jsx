import Link from 'next/link'
import { useRouter } from 'next/router'
import {useContext} from 'react';

import schoolyearContext from '../../context/schoolyears/schoolyearContext'


const NavItem = (props) => {
    const router = useRouter();
    const schoolyearsContext = useContext(schoolyearContext);
    const { schoolyear } = schoolyearsContext;   

    return (  
        <li className={!schoolyear ? 'disabled nav-item' : router.pathname === props.path ? 'active nav-item' : 'nav-item' }>
            <Link href={props.path}>
                <a className="d-flex align-items-center" >
                    {props.children}
                    <span className="menu-title text-truncate">{props.text}</span>
                </a>
            </Link>
        </li>
    );
}
 
export default NavItem;