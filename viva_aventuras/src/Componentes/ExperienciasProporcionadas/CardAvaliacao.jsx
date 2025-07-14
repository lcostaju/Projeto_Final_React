import styles from './CardAvaliacao.module.css';

function CardAvaliacao({ nome, avaliacao, descricao }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {/* <img src="/icons/user-placeholder.png" alt={nome} /> */}
        <strong>{nome}</strong>
      </div>
      <div className={styles.estrelas}>
        {'★'.repeat(avaliacao)}
      </div>
      <p>{descricao}</p>
    </div>
  );
}

export default CardAvaliacao;
