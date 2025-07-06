import styles from './MontainSection.module.css';

function MontainSection() {
    return (
        <section className={styles.montainSection}>
            <img
                src="/image-montain-footer.svg"
                alt="Montanhas com aventureiros"
                className={styles.montainImage}
            />
        </section>
    );
}

export default MontainSection;
