import GameOverScreen from "./gameOverScreen/GameOverScreen.js"
import GameBoard from "./gameBoard/GameBoard.js"
import mainSCSS from "./main.module.scss"

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
                <main className={mainSCSS.main}>
                    <GameBoard checkForSameCard={checkForSameCard} />
                </main>
            )}
        </>
    )
}
