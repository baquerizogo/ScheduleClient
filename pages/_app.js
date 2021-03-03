import Head from "next/head";
import Layout from "../components/layout/Layout";

//Context
import SchoolyearState from '../context/schoolyears/schoolyearState'
import CourseState from '../context/courses/courseState'
import ParallelState from '../context/parallels/parallelState'



function MyApp({ Component, pageProps }) {
    return (
        <SchoolyearState>
            <CourseState>
                <ParallelState>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui"/>
                        <title> Gestor de horarios </title>
                    </Head>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ParallelState>
            </CourseState>
        </SchoolyearState>
    );
}

export default MyApp;
