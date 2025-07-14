import styles from './CardExpProporcionada.module.css';

function CardExpProporcionada({ caminhoImg, titulo, texto }) {
  return (
    <div className={styles.card}>
      <img src={caminhoImg} alt={titulo} />
      <h4>{titulo}</h4>
      <p>{texto}</p>
    </div>
  );
}

export default CardExpProporcionada;
