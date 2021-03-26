import React, { useContext, useEffect } from 'react';
import Link from 'next/link';

//Components
import schoolyearContext from '../../context/schoolyears/schoolyearContext'

import { Plus } from 'react-feather'

const NewSchoolyear = () => {

    //obtener el state del formulario
    const schoolyearsContext = useContext(schoolyearContext);
    const { getSchoolyear, currentSchoolyear } = schoolyearsContext; //Funciones Context
    const { schoolyears } = schoolyearsContext; // Datos Context

    useEffect(() => {
        getSchoolyear();
    }, [])

    const handleChange = (e) => {
        currentSchoolyear(e.target.value);
    }

    return (
        <div className="row mt-2 mb-1">
            <div className="col-2"></div>
            <div className="col-7 input-group p-0">
                <select className="form-control" onChange={handleChange}>
                    <option disabled>Seleccione</option>
                    {
                        schoolyears 
                        ?
                            schoolyears.map(schoolyear => (
                                <option key={schoolyear._id} value={schoolyear._id}>{schoolyear.name}</option>
                            ))
                        : null    
                    }
                </select>
                <div className="input-group-append">
                    <Link href="/a/schoolyears"><a className="btn btn-outline-primary"><Plus size="11"/></a></Link>
                </div>
            </div>
        </div>
    );
}
 
export default NewSchoolyear;