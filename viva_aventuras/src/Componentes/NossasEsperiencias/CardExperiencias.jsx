import style from './CardExperiencias.module.css';

function CardExperiencias({ card }) {
    return (
        <>
            {card && card.map((item, idx) => (
                <div className={style.cardExperiencias} key={idx}>
                    <div><img src={item.icon} alt={item.titulo} /></div>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                </div>
            ))}
            </>
       
    );
}

export default CardExperiencias;
