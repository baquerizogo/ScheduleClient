
import {
    Calendar,
    Box,
    Columns,
    Book,
    User
} from 'react-feather';

const Statistics = () => {
    return (  
        <div className="col-lg-12 col-12">
            <div className="card card-statistics">
                <div className="card-header">
                    <h4 className="card-title">Estadísticas</h4>
                    <div className="d-flex align-items-center">
                        <p className="card-text mr-25 mb-0">Actualizado</p>
                    </div>
                </div>
                <div className="card-body statistics-body">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12 mb-2 mb-md-0">
                            <div className="media">
                                <div className="avatar bg-light-primary mr-2">
                                    <div className="avatar-content">
                                        <Calendar className="avatar-icon"/>
                                    </div>
                                </div>
                                <div className="media-body my-auto">
                                    <h4 className="font-weight-bolder mb-0">4</h4>
                                    <p className="card-text font-small-3 mb-0">Periodos Lectivos</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 mb-2 mb-md-0">
                            <div className="media">
                                <div className="avatar bg-light-info mr-2">
                                    <div className="avatar-content">
                                        <Box className="avatar-icon"/>
                                    </div>
                                </div>
                                <div className="media-body my-auto">
                                    <h4 className="font-weight-bolder mb-0">6</h4>
                                    <p className="card-text font-small-3 mb-0">Cursos</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 mb-2 mb-sm-0">
                            <div className="media">
                                <div className="avatar bg-light-danger mr-2">
                                    <div className="avatar-content">
                                        <Columns className="avatar-icon"/>
                                    </div>
                                </div>
                                <div className="media-body my-auto">
                                    <h4 className="font-weight-bolder mb-0">10</h4>
                                    <p className="card-text font-small-3 mb-0">Paralelos</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="media">
                                <div className="avatar bg-light-success mr-2">
                                    <div className="avatar-content">
                                        <User className="avatar-icon"/>
                                    </div>
                                </div>
                                <div className="media-body my-auto">
                                    <h4 className="font-weight-bolder mb-0">4</h4>
                                    <p className="card-text font-small-3 mb-0">Profesores</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Statistics;