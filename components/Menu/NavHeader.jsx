const NavHeader = (props) => {
    return (  
        <li className=" navigation-header"><span data-i18n="Apps &amp; Pages">{props.text}</span><i data-feather="more-horizontal"/>
        </li>
    );
}
 
export default NavHeader;