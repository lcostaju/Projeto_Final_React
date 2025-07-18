
import MontainSection from "./MontainSection/MontainSection";
import NossasExperiencias from "./NossasEsperiencias/NossasExperiencias";

import FormSection from "./Formulario/FormSection";
import ComoFuncionaSection from "./ComoFunciona/ComoFuncionaSection";
import ExperienciasProporcionadasSection from "./ExperienciasProporcionadas/ExperienciasProporcionadasSection";
import Whatsapp from "../Tools/Whatsapp";
import QuemSomos from "./QuemSomos/QuemSomos";
import Galeria from "./Galeria/Galeria";
import HeroSection from "./HeroSection/HeroSection";
import DuvidasFAQ from "./DuvidasFAQ/DuvidasFAQ";



function Main(){

    return(
        <main>
            <Whatsapp/>
            <HeroSection/>
            <NossasExperiencias/>
            <ComoFuncionaSection/>
            <ExperienciasProporcionadasSection/>
            <QuemSomos/>
            <Galeria/>
            <FormSection />
            <DuvidasFAQ/>
            <MontainSection/>
        </main>
    )
    
}

export default Main;