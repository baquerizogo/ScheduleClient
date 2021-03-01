import { Archive, Mail, User } from "react-feather";

const Form = () => {
    return (  
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Añadir nuevo profesor</h4>
            </div>
            <div className="card-body">
                <form className="form form-horizontal">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group row">
                                <div className="col-sm-3 col-form-label">
                                    <label for="name">Nombre:</label>
                                </div>
                                <div className="col-sm-9">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><User size="16"/></span>
                                        </div>
                                        <input type="text" id="name" className="form-control" name="name" placeholder="Nombres" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group row">
                                <div className="col-sm-3 col-form-label">
                                    <label for="lastName">Apellidos:</label>
                                </div>
                                <div className="col-sm-9">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><User size="16"/></span>
                                        </div>
                                        <input type="text" id="lastName" className="form-control" name="lastName" placeholder="Apellidos" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group row">
                                <div className="col-sm-3 col-form-label">
                                    <label for="dni">Cédula:</label>
                                </div>
                                <div className="col-sm-9">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><Archive size="16"/></span>
                                        </div>
                                        <input type="text" id="dni" className="form-control" name="dni" placeholder="1234567890" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group row">
                                <div className="col-sm-3 col-form-label">
                                    <label for="email">Correo:</label>
                                </div>
                                <div className="col-sm-9">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><Mail size="16"/></span>
                                        </div>
                                        <input type="email" id="email" className="form-control" name="email" placeholder="alguien@example.com" />
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