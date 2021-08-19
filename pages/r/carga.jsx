//Components
import ContentHeader from '../../components/layout/ContentHeader'
import Statistics from '../../components/cargaHoraria/Statistics';
import GroupReport from '../../components/cargaHoraria/GroupReport';
import IndividualReport from '../../components/cargaHoraria/IndividualReport';

import RedirectSchoolyear from '../../components/redirect/RedirectSchoolyear';

const carga = () => {
    return (  
        <RedirectSchoolyear>      
            <ContentHeader root="Home" section="Reportes" path="Carga horaria"/>
            <div className="content-body">
                <section id="basic-horizontal-layouts">
                    <div className="row">
                        <Statistics/>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <GroupReport/>
                        </div>
                        <div className="col-6">
                            <IndividualReport/>
                        </div>
                    </div>
                </section>
            </div>
        </RedirectSchoolyear>
    );
}
 
export default carga;