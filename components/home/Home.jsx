const Home = () => {
    return ( 
        <div className="card w-50 mx-auto">
            <div className="card-body p-5">
                <div className="row">
                    <div className="col text-center">
                        <h2>BIENVENIDO A LA APLICACIÓN WEB PARA GESTIÓN DE HORARIOS DE CLASES</h2>
                        <hr />
                        <p>Puede empezar seleccionando un periodo lectivo en el menú lateral, o haciendo click en el botón (+)</p>
                        <img src="/app-assets/images/EEB.jpg" className="rounded mx-auto d-block" alt="EEB LOGO" width="175" height="175"/>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default Home;