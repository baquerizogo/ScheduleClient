import ContentHeader from "../../components/layout/ContentHeader";
import Form from "../../components/configuracion/form";

const Configuracion = () => {
    return (  
        <>
            <ContentHeader root="Usuario" section="Configuración" path="Cuenta"/>
            <div className="content-body">
                <section id="basic-horizontal-layouts">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <Form/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
 
export default Configuracion;