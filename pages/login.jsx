import Login from "../components/auth/Login";
import Redirect from "../components/hinder/Redirect";

const login = () => {
    return (  
        <Redirect component={Login}></Redirect>
    );
}
 
export default login;