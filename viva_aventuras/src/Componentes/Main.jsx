
import MontainSection from "./MontainSection/MontainSection";
import NossasExperiencias from "./NossasEsperiencias/NossasExperiencias";

import FormSection from "./Formulario/FormSection";
import ComoFuncionaSection from "./ComoFunciona/ComoFuncionaSection";
import ExperienciasProporcionadasSection from "./ExperienciasProporcionadas/ExperienciasProporcionadasSection";


function Main(){

    return(
        <main>
        <NossasExperiencias/>
        <ComoFuncionaSection/>
        <ExperienciasProporcionadasSection/>
        <FormSection />
        </main>
    )
    
}

export default Main;