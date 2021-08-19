import React, {useContext, useEffect} from 'react';
import {useRouter} from 'next/router'; 
import AuthContext from '../../context/auth/authContext'

const HideRoute= ({component: Component, ...props}) => {
    const router = useRouter();
    const authContext = useContext(AuthContext);
    const {autenticado} = authContext;

    useEffect(()=>{
        if(!autenticado){
            router.push('/login');
            return; 
        }
    }, [])


    return(
        <>
            {autenticado ?(<Component {...props}/>) : (<p>Redirecting...</p>)}
        </>
    );
}
 
export default HideRoute;