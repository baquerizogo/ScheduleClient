import Head from "next/head";
import router, { useRouter } from "next/router";

//Context
import SchoolyearState from '../context/schoolyears/schoolyearState'
import CourseState from '../context/courses/courseState'
import ParallelState from '../context/parallels/parallelState'
import TeacherState from '../context/teachers/teacherState'
import ClassState from '../context/classes/classState'
import ScheduleState from "../context/schedules/scheduleState";
import ReportState from "../context/reports/reportState";
import AuthState from "../context/auth/authState";
import Layout from "../components/layout/Layout"

import TokenAuth from "../config/tokenAuth";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    

    if(router.pathname === '/login') {
        return (
            <AuthState>
                <SchoolyearState>
                    <CourseState>
                        <ParallelState>
                            <TeacherState>
                                <ClassState>
                                    <ScheduleState>
                                        <ReportState>
                                            <Head>
                                                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui"/>
                                                <title> Gestor de horarios </title>
                                            </Head>
                                                    <Component {...pageProps} />
                                        </ReportState>
                                    </ScheduleState>
                                </ClassState>
                            </TeacherState>
                        </ParallelState>
                    </CourseState>
                </SchoolyearState>
            </AuthState>
        );
    } else {
        return (
            <AuthState>
                <SchoolyearState>
                    <CourseState>
                        <ParallelState>
                            <TeacherState>
                                <ClassState>
                                    <ScheduleState>
                                        <ReportState>
                                            <Head>
                                                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui"/>
                                                <title> Gestor de horarios </title>
                                            </Head>
                                            <Layout>
                                                <Component {...pageProps} />
                                            </Layout>
                                        </ReportState>
                                    </ScheduleState>
                                </ClassState>
                            </TeacherState>
                        </ParallelState>
                    </CourseState>
                </SchoolyearState>
            </AuthState>
        );
    }

}

export default MyApp;
