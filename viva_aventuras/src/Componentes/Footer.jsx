import style from './Footer.module.css';
import MontainSection from './MontainSection/MontainSection';

function Footer() {
    return (
        <footer>
            <MontainSection />
            <section className={style.classFooter}>
                <div className={style.container}>
                    {/* Coluna 1: Logo + redes sociais */}
                    <div className={style.coluna}>
                        <img src="/icon-white.png" alt="Viva Aventuras" className={style.logo} />
                        <div className={style.redes}>
                            <img src="/insta-icon.png" alt="Instagram" />
                            <img src="/face-icon.png" alt="Facebook" />
                        </div>
                    </div>

                    {/* Coluna 2: Mapa embedado + descrição */}
                    <div className={style.coluna}>
                        <iframe
                            title="Mapa Serra da Canastra"
                            className={style.mapa}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909498.8706935628!2d-46.5091201279684!3d-20.811911481984882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b1467163019e5b%3A0x555f0e8d7748d358!2sParque%20Nacional%20da%20Serra%20da%20Canastra!5e0!3m2!1spt-BR!2sbr!4v1751844810712!5m2!1spt-BR!2sbr"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        iframe/>
                        <p>
                            As atividades acontecem em meio à natureza, Serra da Canastra, MG.
                        </p>
                    </div>

                    {/* Coluna 3: Menu */}
                    <div className={style.coluna}>
                        <nav className={style.menu}>
                            <span>Menu</span>
                            <a href="#inicio">Início</a>
                            <a href="#servicos">Serviços</a>
                            <a href="#como-funciona">Como Funciona</a>
                            <a href="#experiencias">Experiências</a>
                            <a href="#autoridade">Autoridade</a>
                            <a href="#galeria">Galeria</a>
                            <a href="#contato">Contato</a>
                            <a href="#duvidas">Dúvidas</a>
                        </nav>
                    </div>
                </div>

                <div className={style.divisor}></div>
                <p className={style.direitos}>© 2025 Viva Aventuras. Todos os direitos reservados.</p>
            </section>
        </footer>
    );
}

export default Footer;
