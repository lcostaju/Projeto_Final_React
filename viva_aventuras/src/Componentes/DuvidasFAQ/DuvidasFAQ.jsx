
import { useEffect, useState } from 'react';
import styles from './DuvidasFAQ.module.css';

function DuvidasFAQ() {
  const [duvidas, setDuvidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('./data/duvidas.json')
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao carregar dúvidas');
        return res.json();
      })
      .then((data) => {
        setDuvidas(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles.faqSection} id="faq">
      <h2 className={styles.faqTitulo}>Dúvidas antes de se lançar?</h2>
      <p className={styles.faqDescricao}>A gente responde tudo pra você se sentir seguro (e animado).</p>
      {loading && <div>Carregando...</div>}
      {error && <div style={{color: 'red'}}>Erro: {error}</div>}
      <div className={styles.faqGrid}>
        {duvidas.map((item, idx) => (
          <div className={styles.faqCard} key={idx}>
            {item.icon && item.icon.startsWith('/') ? (
              <img src={item.icon} alt="Ícone" className={styles.faqIcon} />
            ) : (
              <span className={styles.faqIcon}>{item.icon}</span>
            )}
            <div>
              <div className={styles.faqPergunta}>{item.pergunta}</div>
              <div className={styles.faqResposta}>{item.resposta}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default DuvidasFAQ;