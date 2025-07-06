import styles from './FormSection.module.css';
import FormInfo from './FormInfo';
import Formulario from './Formulario';

function FormSection() {
  return (
    <section className={styles.formSection}>
      <div className={styles.overlay}>
        <FormInfo />
        <Formulario />
      </div>
    </section>
  );
}

export default FormSection;
