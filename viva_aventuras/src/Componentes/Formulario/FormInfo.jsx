import styles from './FormSection.module.css';

function FormInfo() {
  return (
    <div className={styles.info}>
      <h1>Essa aventura começa com um passo – <span className={styles.highlight}>e um formulário.</span></h1>
      <p>
        Preencha os dados e venha viver uma experiência<br />
        só sua.
      </p>
    </div>
  );
}

export default FormInfo;
