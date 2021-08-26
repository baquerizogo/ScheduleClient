const SimpleModal = ({msg, status}) => {
    return (  
        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
            <div className="modal-dialog" role="document" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className={`modal-title ${status == 5 ? 'text-success' : status == 0 ? 'text-danger': 'text-secondary'} `} id="exampleModalLongTitle" > {status == 5 ? 'Ejecución exitosa' : status == 0 ? 'Ejecucción fallida': 'procesando...'} </h5>
                        <button type="button" className={`close ${status == 5 ? 'text-success' : status == 0 ? 'text-danger': 'text-secondary'}`} data-dismiss="modal" aria-label="Close" >
                            <span aria-hidden="true"> &times; </span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {
                            !msg ? 
                                <div className="sk-cube-grid">
                                    <div className="sk-cube sk-cube1"></div>
                                    <div className="sk-cube sk-cube2"></div>
                                    <div className="sk-cube sk-cube3"></div>
                                    <div className="sk-cube sk-cube4"></div>
                                    <div className="sk-cube sk-cube5"></div>
                                    <div className="sk-cube sk-cube6"></div>
                                    <div className="sk-cube sk-cube7"></div>
                                    <div className="sk-cube sk-cube8"></div>
                                    <div className="sk-cube sk-cube9"></div>
                                </div>
                            : null
                        }
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