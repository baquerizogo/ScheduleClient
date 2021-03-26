import {useRouter} from 'next/router'; 
import { useContext, useEffect } from 'react';

import schoolyearContext from '../../context/schoolyears/schoolyearContext'

const RedirectSchoolyear = (props) => {
    const router = useRouter();
    const {children} = props

    const schoolyearsContext = useContext(schoolyearContext);
    const {schoolyear} = schoolyearsContext;

    useEffect(()=>{
        if(!schoolyear){
            router.push('/')
            return;
        }
    },[])

    return(
        <>
            {schoolyear ? (children) : (<p>Redirecting...</p>)}
        </>
    );
}
 
export default RedirectSchoolyear;