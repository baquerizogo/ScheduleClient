//Components
import NavHeader from '../Menu/NavHeader';
import NavItem from '../Menu/NavItem';
import NewSchoolyear from '../schoolyears/newSchoolyear';

import {
    Home,
    Box,
    Columns,
    Users,
    Book,
    Calendar,
    BarChart2
} from 'react-feather'

const MenuBar = () => {

    return (  
        <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
            <div className="navbar-header">
                <ul className="nav navbar-nav flex-row">
                    <li className="nav-item mr-auto">
                        <a className="navbar-brand" href="#">
                            <Calendar size="30" strokeWidth="3"/>
                            <h2 className="brand-text">Horarios v0.0.1</h2>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="shadow-bottom"></div>
            <div className="main-menu-content">
                <ul className="navigation">
                    <NewSchoolyear/>
                    <NavItem path="/" text="Home">
                        <Home/>
                    </NavItem>
                    <NavHeader text="Administración"/>
                    <NavItem path="/a/cursos" text="Cursos">
                        <Box/>
                    </NavItem>
                    <NavItem path="/a/paralelos" text="Paralelos">
                        <Columns/>
                    </NavItem>
                    <NavItem path="/a/profesores" text="Profesores">
                        <Users/>
                    </NavItem>
                    <NavItem path="/a/asignaturas" text="Asignaturas">
                        <Book/>
                    </NavItem>
                    <NavHeader text="Gestor de horarios"/>
                    <NavItem path="/g/horarios" text="Administrar horarios">
                        <Calendar/>
                    </NavItem>
                    <NavHeader text="Reportes"/>
                    <NavItem path="/r/carga" text="Cargas horarias">
                        <BarChart2/>
                    </NavItem>
                    <NavItem path="/r/horarioCursos" text="Horarios Cursos">
                        <Calendar/>
                    </NavItem>
                    <NavItem path="/r/horarioDocentes" text="Horarios docentes">
                        <Calendar/>
                    </NavItem>
                </ul>
            </div>
        </div>
    );
}
 
export default MenuBar;