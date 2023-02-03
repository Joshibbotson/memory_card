import cardSCSS from "./card.module.scss"

//card should create a card object via a factory function
export default function Card({ imgClass, checkForSameCard }) {
    return (
        <div className={cardSCSS.card}>
            <div
                className={`${cardSCSS[imgClass]}`}
                onClick={checkForSameCard}
            ></div>
        </div>
    )
}
