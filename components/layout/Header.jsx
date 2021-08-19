import React, {useContext} from 'react';
import {useRouter} from 'next/router'
import Link from 'next/link'
//Components
import AuthContext from '../../context/auth/authContext'

//Components
import {
    Settings,
    Power,
    Lock,
    Moon
} from 'react-feather'

const Header = () => {
    const router = useRouter();

    //Importar context
    const authContext = useContext(AuthContext);
    const { account, cerrarSesion } = authContext;

    return (  
        <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow">
            <div className="navbar-container d-flex content">
                <div className="bookmark-wrapper d-flex align-items-center">
                    
                    <ul className="nav navbar-nav">
                        <li className="nav-item"><h3>Aplicación web para la gestión de horarios</h3></li>
                    </ul>
                </div>
                <ul className="nav navbar-nav align-items-center ml-auto"> 
                    <li className="nav-item d-none d-lg-block"><a className="nav-link nav-link-style"><Moon className="ficon"/></a></li>
                    <li className="nav-item dropdown dropdown-user"><a className="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="user-nav d-sm-flex d-none"><span className="user-name font-weight-bolder">Administrador</span><span className="user-status">Admin</span></div><span className="avatar"><img className="round" src="../../../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height="40" width="40"/><span className="avatar-status-online"></span></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="page-account-settings.html"><Settings className="mr-50"/> Configuración</a>
                            {account ? account.role < 1 ? <Link href="/c/acceso"><a className="dropdown-item"><Lock className="mr-50"/>Acceso</a></Link> : null : null}
                            <a className="dropdown-item btn" onClick={()=>{
                                cerrarSesion();
                                router.push('/login');
                            }}><Power className="mr-50"/> Cerrar Sesión</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Header;