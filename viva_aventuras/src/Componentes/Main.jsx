
import MontainSection from "./MontainSection/MontainSection";
import NossasExperiencias from "./NossasEsperiencias/NossasExperiencias";

import FormSection from "./Formulario/FormSection";
import ComoFuncionaSection from "./ComoFunciona/ComoFuncionaSection";
import ExperienciasProporcionadasSection from "./ExperienciasProporcionadas/ExperienciasProporcionadasSection";
import Whatsapp from "../Tools/Whatsapp";
import QuemSomos from "./QuemSomos/QuemSomos";
import Galeria from "./Galeria/Galeria";
import DuvidasFAQ from "./DuvidasFAQ/DuvidasFAQ";


function Main(){

    return(
        <main>
        <Whatsapp/>
        <NossasExperiencias/>
        <ComoFuncionaSection/>
        <ExperienciasProporcionadasSection/>
        <QuemSomos/>
        <Galeria/>
        <FormSection />
        <DuvidasFAQ/>
        </main>
    )
    
}

export default Main;