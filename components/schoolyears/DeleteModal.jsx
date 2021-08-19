import { useContext } from 'react';

import schoolyearContext from '../../context/schoolyears/schoolyearContext'

const DeleteModal = ({data, index}) => {
    //obtener el state del formulario
    const schoolyearsContext = useContext(schoolyearContext);
    const { deleteSchoolyear } = schoolyearsContext; //Funciones Context

    const onDeleteClick = e => {
        deleteSchoolyear(data);
    }
    return (  
        <div className="modal fade" id={`deleteModal${index}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered" role="document" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-danger" id="exampleModalLongTitle" > Eliminar Periodo lectivo </h5>
                        <button type="button" className='close text-danger' data-dismiss="modal" aria-label="Close" >
                            <span aria-hidden="true"> &times; </span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {`¿Está seguro que desea eliminar el periodo lectivo ${data.name}?`}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className='btn btn-danger' data-dismiss="modal" onClick={onDeleteClick}>
                            Eliminar
                        </button>
                        <button type="button" className='btn btn-secondary' data-dismiss="modal">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default DeleteModal;