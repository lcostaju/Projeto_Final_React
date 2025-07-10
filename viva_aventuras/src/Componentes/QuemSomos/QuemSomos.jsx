import React from 'react';
import styles from './QuemSomos.module.css';

function QuemSomos() {
  return (
    <section className={styles['quem-somos-section']} id="autoridade">
      <h1 className={styles['quem-somos-title']}>Quem Somos</h1>
      <div className={styles['quem-somos-main']}>
        <img
          src="/image/quemSomos.png"
          alt="Equipe Viva Aventuras"
          className={styles['quem-somos-img']}
        />
        <p className={styles['quem-somos-desc']}>
            Viva Aventuras é uma operadora de ecoturismo especializada em turismo de aventura
            com base na segurança, sustentabilidade e inclusão das mulheres no Turismo de Aventuras
            e ao esporte atraves dos curso de Rapel. Fundada em 2019 ,opera na região do Triângulo Mineiro e Canastra. Nestes 6 anos realizou vários curso de Rapel esportivo e dese de 2023 oferece tambem Cursos profissionais como Trabalho em Altura conforme Nr35. Tornando 
            profissionais com alto padrão técnico e também realizamos Consultoria e treinamentos profissionais
            pecializados para empresas no setor de Limpeza e Conservação.
            Nosso impacto vai além da adrenalina: preservamos o meio ambiente, promovemos o
            desenvolvimento comunitário e criamos experiências que unem corpo, mente e espírito.
            Mais que aventura A Viva é conexão, consciência e transformação.
        </p>
      </div>
      <h2 className={styles['quem-somos-cert-title']}>Nossas Certificações</h2>
      <div className={styles['quem-somos-cards']}>
        <div className={styles['quem-somos-card']}>
          <img src="/icone/certificacao.svg" alt="IRATA Internacional" className={styles['quem-somos-icon']} />
          <h3>IRATA Internacional</h3>
          <p>Certificação internacional para trabalhos em altura e acesso por cordas</p>
        </div>
        <div className={styles['quem-somos-card']}>
          <img src="/icone/tecnico.svg" alt="Técnico de Segurança" className={styles['quem-somos-icon']} />
          <h3>Técnico de Segurança</h3>
          <p>Associação Brasileira das Empresas de Ecoturismo e Turismo de Aventura</p>
        </div>
        <div className={styles['quem-somos-card']}>
          <img src="/icone/cadastrotur.svg" alt="Cadastur" className={styles['quem-somos-icon']} />
          <h3>Cadastur</h3>
          <p>Certificação de Prestadores de Serviços Turísticos</p>
        </div>
        <div className={styles['quem-somos-card']}>
          <img src="/icone/ministeriotrabalho.svg" alt="Ministério do Trabalho" className={styles['quem-somos-icon']} />
          <h3>Ministério do Trabalho</h3>
          <p>Certificação da NR-35 para trabalho em altura</p>
        </div>
      </div>
    </section>
  );
}

export default QuemSomos;
