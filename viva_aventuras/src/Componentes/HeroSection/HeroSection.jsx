import styles from './HeroSection.module.css';

function HeroSection() {
    const scrollToForm = () => {
        const formSection = document.getElementById('contato');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.hero} id = 'inicio'>
            <div className={styles['hero-content']}>
                <div className={styles.blocoTexto}>
                    <div className={styles.textos}>
                        <h1>
                            SERRA DA<br />
                            CANASTRA<br />
                            <span className={styles.viva}>VIVA</span> ESSA<br />
                            <span className={styles.aventuraNas}>AVENTURA NAS</span>
                            
                        </h1>
                    </div>
                    <span className={styles.alturas}>ALTURAS</span>
                </div>

                <div className={styles.ctaBox}>
                    <p>
                        Supere limites, conecte-se com outras<br />
                        pessoas e viva experiências inesquecíveis<br />
                        na Serra da Canastra.
                    </p>
                    <button className={styles.ctaBtn} onClick={scrollToForm}>
                        Quero conhecer
                        <img src="/iconButtonHero.svg" alt="Ícone aventura" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
