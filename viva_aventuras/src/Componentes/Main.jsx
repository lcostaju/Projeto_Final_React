
import MontainSection from "./MontainSection/MontainSection";
import NossasExperiencias from "./NossasEsperiencias/NossasExperiencias";

import FormSection from "./Formulario/FormSection";
import ComoFuncionaSection from "./ComoFunciona/ComoFuncionaSection";
import ExperienciasProporcionadasSection from "./ExperienciasProporcionadas/ExperienciasProporcionadasSection";
import Whatsapp from "../Tools/Whatsapp";
import QuemSomos from "./QuemSomos/QuemSomos";


function Main(){

    return(
        <main>
        <Whatsapp/>
        <NossasExperiencias/>
        <ComoFuncionaSection/>
        <ExperienciasProporcionadasSection/>
        <QuemSomos/>
        <FormSection />
        </main>
    )
    
}

export default Main;