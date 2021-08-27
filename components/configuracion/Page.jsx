import ContentHeader from "../layout/ContentHeader";
import Form from "./Form";

const Page = () => {
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
 
export default Page;