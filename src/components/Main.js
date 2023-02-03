import Card from "./cards/Card.js"
import mainSCSS from "./main.module.scss"
import GameBoard from "./gameBoard/GameBoard.js"

export default function Main({ checkForSameCard }) {
    return (
        <main>
            <GameBoard checkForSameCard={checkForSameCard} />
        </main>
    )
}
