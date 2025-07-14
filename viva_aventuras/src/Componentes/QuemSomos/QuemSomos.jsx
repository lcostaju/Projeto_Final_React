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
        <div className={styles['quem-somos-desc']}>
          <p><strong>Viva Aventuras</strong> é uma operadora de ecoturismo especializada em turismo de aventura com base na <strong>segurança</strong>, <strong>sustentabilidade</strong> e <strong>inclusão das mulheres</strong> no Turismo de Aventuras e ao esporte através dos cursos de Rapel.</p>
          <p>Fundada em 2019, opera na região do <strong>Triângulo Mineiro</strong> e <strong>Canastra</strong>.</p>
          <p>Nestes 6 anos realizou vários cursos de Rapel esportivo e, desde 2023, oferece também <strong>Cursos Profissionais</strong> como Trabalho em Altura conforme NR35, tornando profissionais com alto padrão técnico.</p>
          <p>Também realizamos <strong>consultoria</strong> e <strong>treinamentos profissionais</strong> especializados para empresas no setor de Limpeza e Conservação.</p>
          <p>Nosso impacto vai além da adrenalina:</p>
          <ul>
            <li>Preservamos o meio ambiente</li>
            <li>Promovemos o desenvolvimento comunitário</li>
            <li>Criamos experiências que unem corpo, mente e espírito</li>
          </ul>
          <p><strong>Mais que aventura:</strong> a Viva é <strong>conexão</strong>, <strong>consciência</strong> e <strong>transformação</strong>.</p>
        </div>
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
