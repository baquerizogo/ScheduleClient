import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react';

//Components
import schoolyearContext from '../../context/schoolyears/schoolyearContext'


const NavItem = (props) => {
    const router = useRouter();
    const schoolyearsContext = useContext(schoolyearContext);
    const { schoolyear } = schoolyearsContext; //Datos context

    return (  
        <li className={`nav-item ${!schoolyear ? 'disabled' : router.pathname === props.path ? 'active' : null }`}>
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