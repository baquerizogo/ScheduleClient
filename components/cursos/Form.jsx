import { AlignLeft, Box } from "react-feather";

const Form = () => {
    return (  
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Añadir nuevo curso</h4>
            </div>
            <div className="card-body">
                <form className="form form-horizontal">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group row">
                                <div className="col-sm-3 col-form-label">
                                    <label for="fname-icon">Nombre:</label>
                                </div>
                                <div className="col-sm-9">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><Box size="16"/></span>
                                        </div>
                                        <input type="text" id="fname-icon" className="form-control" name="fname-icon" placeholder="First Name" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group row">
                                <div className="col-sm-3 col-form-label">
                                    <label for="description">Descripción:</label>
                                </div>
                                <div className="col-sm-9">
                                    <div className="input-group input-group-merge">
                                        <textarea className="form-control" id="description" rows="4" placeholder="Descripción"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9 offset-sm-3">
                            <button type="reset" className="btn btn-primary mr-1">Guardar</button>
                            <button type="reset" className="btn btn-outline-secondary">Reiniciar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>              
    );
}
 
export default Form;