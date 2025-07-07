import styles from './ExperienciasProporcionadasSection.module.css';
import CardExpProporcionada from './CardExpProporcionada';
import CardAvaliacao from './CardAvaliacao';

function ExperienciasProporcionadasSection() {
    const experiencias = [
        {
            caminhoImg: '/icon-superacao.png',
            titulo: 'Superação',
            texto: 'Desafie-se, vença medos e sinta-se mais forte a cada conquista.'
        },
        {
            caminhoImg: '/icon-conexao.png',
            titulo: 'Conexão',
            texto: 'Crie laços com outras pessoas e com a natureza.'
        },
        {
            caminhoImg: '/icon-consciencia.png',
            titulo: 'Consciência',
            texto: 'Vivencie o respeito ao meio ambiente e a si mesma.'
        }
    ];

    const avaliacoes = [
        {
            nome: 'Alessandra',
            avaliacao: 4,
            descricao: '“Equipe super profissional , passa total segurança e prazer em cada encontro .'
        },
        {
            nome: 'Bruno Serafim',
            avaliacao: 5,
            descricao: '“Amei!!! Uma empresa responsável, trata bem seus clientes, muito bom participar das atividades deles!'
        },
        {
            nome: 'Rafael de  Freitas Vieira',
            avaliacao: 5,
            descricao: '“Experiência incrível, profissionais carismáticos e competentes.'
        }
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.titulo}>
                <span className={styles.destaque}>Experiências</span> Proporcionadas
            </h2>

            <div className={styles.cardsExperiencia}>
                {experiencias.map((item, index) => (
                    <CardExpProporcionada key={index} {...item} />
                ))}
            </div>
            
            <div>
                <h3 className={styles.subtitulo}>Depoimentos Reais</h3>

            <div className={styles.cardsAvaliacao}>
                {avaliacoes.map((item, index) => (
                    <CardAvaliacao key={index} {...item} />
                ))}
            </div>
            </div>
            
        </section>
    );
}

export default ExperienciasProporcionadasSection;
