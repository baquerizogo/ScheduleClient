//Components
import {Heart} from 'react-feather';

const Footer = () => {
    return (  
        <>
            <footer className="footer footer-static footer-light">
                <p className="clearfix mb-0"><span className="float-md-left d-block d-md-inline-block mt-25">COPYRIGHT &copy; 2021<a className="ml-25" href="https://github.com/Jabgomez" target="_blank">José Baquerizo</a><span className="d-none d-sm-inline-block">, Todos los derechos reservados</span></span><span className="float-md-right d-none d-md-block">Hecho con el corazón, buenas prácticas y un par de lágrimas<Heart/></span></p>
            </footer>
            <button className="btn btn-primary btn-icon scroll-top" type="button"><i data-feather="arrow-up"></i></button>
        </>
    );
}
 
export default Footer;