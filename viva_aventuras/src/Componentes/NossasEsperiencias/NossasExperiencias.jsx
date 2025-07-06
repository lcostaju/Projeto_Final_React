import CardExperiencias from './CardExperiencias';
import style from './NossasExperiencias.module.css';

function NossasExperiencias() {
    const card = [
        { icon: '/icon-montain.svg', titulo: 'Rapel', texto: 'Aventure-se em descidas emocionantes em meio à natureza' },
        { icon: '/icon-capelo.svg', titulo: 'Curso de Rapel', texto: 'Aprenda técnicas de rapel com instrutores especializados.' },
        { icon: '/icon-secutity.svg', titulo: 'Treinamento em Altura', texto: 'Capacitação segura para atividades em altura, com foco no público feminino.' },
        { icon: '/icon-cachoeira.svg', titulo: 'Trilhas & Cachoeiras', texto: 'Vivencie trilhas e banhos de cachoeira na Serra da Canastra' }
    ];
    return ( 
        <section>
            <div className={style.containerNossasExp}>
                <h2>Nossas Experiências</h2>
                <div className={style.containerCardNossasExperiencias}>
                    <CardExperiencias card={card} />
                </div>
            </div>
        </section>
     );
}

export default NossasExperiencias;