const SimpleModal = ({msg, status}) => {
    return (  
        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
            <div className="modal-dialog" role="document" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className={`modal-title ${status == 5 ? 'text-success' : 'text-danger'} `} id="exampleModalLongTitle" > {status == 5 ? 'Ejecución exitosa' : 'Ejecución fallida'} </h5>
                        <button type="button" className={`close ${status == 5 ? 'text-success' : 'text-danger'}`} data-dismiss="modal" aria-label="Close" >
                            <span aria-hidden="true"> &times; </span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {msg}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className={`btn ${status == 5 ? 'btn-success' : 'btn-danger'}`} data-dismiss="modal">
                            Aceptar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SimpleModal;