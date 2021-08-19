import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html className="loading" lang="es" data-textdirection="ltr">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="description" content="Vuexy admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities."/>
                    <meta name="keywords" content="admin template, Vuexy admin template, dashboard template, flat admin template, responsive admin template, web app"/>
                    <meta name="author" content="PIXINVENT"/>
                    <link rel="apple-touch-icon" href="/app-assets/images/ico/apple-icon-120.png"/>
                    <link rel="shortcut icon" type="image/x-icon" href="/app-assets/images/ico/favicon.ico"/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600" rel="stylesheet"/>

                    <link rel="stylesheet" type="text/css" href="/css/style.css"/>

                    {/*Vendor CSS*/}
                    <link rel="stylesheet" type="text/css" href="/app-assets/vendors/css/vendors.min.css"/>
                    <link rel="stylesheet" type="text/css" href="/app-assets/vendors/css/charts/apexcharts.css"/>
                    <link rel="stylesheet" type="text/css" href="/app-assets/vendors/css/extensions/toastr.min.css"/>

                    {/*Theme CSS*/}
                    <link rel="stylesheet" type="text/css" href="/app-assets/css/bootstrap.css"/>
                    <link rel="stylesheet" type="text/css" href="/app-assets/css/bootstrap-extended.css"/>
                    <link rel="stylesheet" type="text/css" href="/app-assets/css/colors.css"/>
                    <link rel="stylesheet" type="text/css" href="/app-assets/css/components.css"/>
                    <link rel="stylesheet" type="text/css" href="/app-assets/css/themes/dark-layout.css"/>
                    <link rel="stylesheet" type="text/css" href="/app-assets/css/themes/bordered-layout.css"/>

                    {/*Page CSS*/}
                    <link rel="stylesheet" type="text/css" href="/app-assets/css/core/menu/menu-types/vertical-menu.css"/>
                    <link rel="stylesheet" type="text/css" href="/app-assets/css/pages/dashboard-ecommerce.css"/>
                    <link rel="stylesheet" type="text/css" href="/app-assets/css/plugins/charts/chart-apex.css"/>
                    <link rel="stylesheet" type="text/css" href="/app-assets/css/plugins/extensions/ext-component-toastr.css"/>
                    
                    {/*Custom CSS*/}
                    <link rel="stylesheet" type="text/css" href="/assets/css/style.css"/>
                    
                </Head>
                <body className="vertical-layout vertical-menu-modern  navbar-floating footer-static  " data-open="click" data-menu="vertical-menu-modern" data-col="blank-page">
                    <Main/>

                    <NextScript />

                    {/* BEGIN: Vendor JS */}
                    <script src="../../../app-assets/vendors/js/vendors.min.js"></script>

                    {/* BEGIN: Page Vendor JS */}
                    <script src="../../../app-assets/vendors/js/charts/apexcharts.min.js"></script>
                    <script src="../../../app-assets/vendors/js/extensions/toastr.min.js"></script>

                    {/* BEGIN: Theme JS */}
                    <script src="../../../app-assets/js/core/app-menu.js"></script>
                    <script src="../../../app-assets/js/core/app.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js" integrity="sha512-7x3zila4t2qNycrtZ31HO0NnJr8kg2VI67YLoRSyi9hGhRN66FHYWr7Axa9Y1J9tGYHVBPqIjSE1ogHrJTz51g==" crossOrigin="anonymous"></script>

                    <script src="https://kit.fontawesome.com/a04ec12f68.js" crossOrigin="anonymous"></script>
                    <script>
                        feather.replace()
                    </script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
