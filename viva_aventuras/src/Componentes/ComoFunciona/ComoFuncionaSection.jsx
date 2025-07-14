import styles from './ComoFuncionaSection.module.css';

function ComoFuncionaSection() {
  return (
    <section className={styles.comoFunciona} id='comoFunciona'>
      <div className={styles.container}>
        {/* Coluna 1: Como funciona */}
        <div className={styles.coluna}>
          <h2>Como funciona</h2>
          <ol className={styles.etapas}>
            <li>
              <div className={styles.numero}>1</div>
              <div>
                <h3>Contato Inicial:</h3>
                <p>Envie uma mensagem pelo WhatsApp ou formulário.</p>
              </div>
            </li>
            <li>
              <div className={styles.numero}>2</div>
              <div>
                <h3>Escolha sua Experiência:</h3>
                <p>Selecione a atividade que mais combina com você.</p>
              </div>
            </li>
            <li>
              <div className={styles.numero}>3</div>
              <div>
                <h3>Confirmação e Pagamento:</h3>
                <p>Confirme sua vaga e defina a melhor forma de pagamento.</p>
              </div>
            </li>
            <li>
              <div className={styles.numero}>4</div>
              <div>
                <h3>Viva sua Aventura:</h3>
                <p>Participe do evento com toda segurança e acolhimento.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Coluna 2: Diferenciais */}
        <div className={styles.coluna}>
          <h2>Nossos Diferenciais</h2>
          <ul className={styles.diferenciais}>
            <li>
              <img src="/icon-exp.png" alt="" />
              <p>+8 anos de experiência no segmento</p>
            </li>
            <li>
              <img src="/icon-fem.png" alt="" />
              <p>Ênfase no público feminino</p>
            </li>
            <li>
              <img src="/icon-bus.png" alt="" />
              <p>Pacotes com transporte incluso</p>
            </li>
            <li>
              <img src="/icon-card.png" alt="" />
              <p>Pagamento facilitado: cartões, PIX, boleto bancário</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ComoFuncionaSection;
