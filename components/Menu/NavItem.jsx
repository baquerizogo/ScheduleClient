import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react';

//Components
import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import authContext from '../../context/auth/authContext';

const NavItem = (props) => {
    const router = useRouter();
    const AuthContext = useContext(authContext);
    const { account } = AuthContext;
    const schoolyearsContext = useContext(schoolyearContext);
    const { schoolyear } = schoolyearsContext; //Datos context

    return (  
        <li className={`nav-item ${account ? (!schoolyear || account.role > props.role) ? 'disabled' : router.pathname === props.path ? 'active' : null : null }`}>
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