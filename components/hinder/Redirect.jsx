import React, {useContext, useEffect} from 'react';
import {useRouter} from 'next/router'; 
import AuthContext from '../../context/auth/authContext'
import schoolyearContext from '../../context/schoolyears/schoolyearContext';


const Redirect = ({component: Component, ...props}) => {
    const router = useRouter();
    const authContext = useContext(AuthContext);
    const {autenticado} = authContext;

    const schoolyearsContext = useContext(schoolyearContext);
    const {getSchoolyear} = schoolyearsContext;

    useEffect(()=>{
        if(autenticado){
            router.push({
                pathname: '/'
            });
        }
    },[autenticado])


    return(
        <>
            {!autenticado ?(<Component {...props}/>) : (<p>Redirecting...</p>)}
        </>
    );
}
 
export default Redirect;