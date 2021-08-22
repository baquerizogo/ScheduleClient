import { useContext } from 'react';

//Components
import NavHeader from '../Menu/NavHeader';
import NavItem from '../Menu/NavItem';
import NewSchoolyear from '../schoolyears/NewSchoolyear';

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
                    <NewSchoolyear role={1}/>
                    <NavItem path="/" text="Home">
                        <Home/>
                    </NavItem>
                    <NavHeader text="Administración"/>
                    <NavItem path="/a/cursos" text="Cursos" role={1}>
                        <Box/>
                    </NavItem>
                    <NavItem path="/a/paralelos" text="Paralelos" role={1}>
                        <Columns/>
                    </NavItem>
                    <NavItem path="/a/profesores" text="Profesores" role={1}>
                        <Users/>
                    </NavItem>
                    <NavItem path="/a/asignaturas" text="Asignaturas" role={1}>
                        <Book/>
                    </NavItem>
                    <NavHeader text="Gestor de horarios"/>
                    <NavItem path="/g/horarios" text="Crear horarios" role={1}>
                        <Calendar/>
                    </NavItem>
                    <NavItem path="/g/modhorarios" text="modificar horarios" role={1}>
                        <Calendar/>
                    </NavItem>
                    <NavItem path="/g/auto" text="Creación automática" role={1}>
                        <Calendar/>
                    </NavItem>
                    <NavHeader text="Reportes"/>
                    <NavItem path="/r/carga" text="Cargas horarias" role={2}>
                        <BarChart2/>
                    </NavItem>
                    <NavItem path="/r/horarioCursos" text="Horarios Cursos" role={2}>
                        <Calendar/>
                    </NavItem>
                    <NavItem path="/r/horarioDocentes" text="Horarios docentes" role={2}>
                        <Calendar/>
                    </NavItem>
                </ul>
            </div>
        </div>
    );
}
 
export default MenuBar;