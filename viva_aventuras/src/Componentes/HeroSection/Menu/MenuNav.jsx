import { useState } from 'react';
import styles from './MenuNav.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones do hambúrguer

function MenuNav() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <div className={styles.logo}>
          <img src="/navLogoNew.png" alt="Viva Aventuras" />
        
        </div>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          {menuAberto ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`${styles.nav} ${menuAberto ? styles.aberto : ''}`}>
          <a href="#inicio" onClick={fecharMenu} >Início</a>
          <a href="#servicos" onClick={fecharMenu}>Serviços</a>
          <a href="#como-funciona" onClick={fecharMenu}>Como Funciona</a>
          <a href="#experiencias" onClick={fecharMenu}>Experiências</a>
          <a href="#autoridade" onClick={fecharMenu}>Autoridade</a>
          <a href="#galeria" onClick={fecharMenu}>Galeria</a>
          <a href="#contato" onClick={fecharMenu}>Contato</a>
          <a href="#duvidas" onClick={fecharMenu}>Dúvidas</a>
        </nav>
      </div>
    </header>
  );
}

export default MenuNav;
