import Card from "./cards/Card.js"
import mainSCSS from "./main.module.scss"
import gameOverScreenSCSS from "../components/gameOverScreen/gameOverScreen.module.scss"

import GameOverScreen from "./gameOverScreen/GameOverScreen.js"
import GameBoard from "./gameBoard/GameBoard.js"

export default function Main({
    checkForSameCard,
    gameOver,
    roundScore,
    resetGame,
    win,
}) {
    return (
        <>
            {gameOver ? (
                <GameOverScreen
                    roundScore={roundScore}
                    resetGame={resetGame}
                    win={win}
                />
            ) : (
                <main>
                    <GameBoard checkForSameCard={checkForSameCard} />
                </main>
            )}
        </>
    )
}
