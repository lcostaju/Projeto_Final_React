import { useState, useEffect, useRef } from 'react';
import styles from './MenuNav.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function MenuNav() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [visivel, setVisivel] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setVisivel(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisivel(false); // rolando para baixo
      } else {
        setVisivel(true); // rolando para cima
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <header className={`${styles.header} ${visivel ? '' : styles.oculto}`}>
      <div className={styles['header-container']}>
        <div className={styles.logo}>
          <img src="/navLogoNew.png" alt="Viva Aventuras" />
        </div>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {menuAberto ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`${styles.nav} ${menuAberto ? styles.aberto : ''}`}>
          <a href="/" onClick={fecharMenu} >Início</a>
          <a href="#nossasExp" onClick={fecharMenu}>Nossas Experiências</a>
          <a href="#comoFunciona" onClick={fecharMenu}>Como Funciona</a>
          <a href="#experiencias" onClick={fecharMenu}>Experiências</a>
          <a href="#autoridade" onClick={fecharMenu}>Quem somos</a>
          <a href="#galeria" onClick={fecharMenu}>Galeria</a>
          <a href="#contato" onClick={fecharMenu}>Contato</a>
          <a href="#duvidas" onClick={fecharMenu}>Dúvidas</a>
        </nav>
      </div>
    </header>
  );
}

export default MenuNav;
