import MenuBar from './MenuBar'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return ( 
        <>
            <Header/>
            <MenuBar/>
            <div className="app-content content ">
                <div className="content-overlay"></div>
                <div className="header-navbar-shadow"></div>
                <div className="content-wrapper">
                    { children }
                </div>
            </div>
            <Footer/>
        </>
    );
}
 
export default Layout;