import gameOverScreenSCSS from "./gameOverScreen.module.scss"

export default function GameOverScreen({ roundScore, resetGame, win }) {
    return (
        <>
            {win ? (
                <main className={gameOverScreenSCSS.gameOverMain}>
                    <h1>YOU WIN</h1>
                    <h2>Well done your Score is: {roundScore}</h2>
                    <button onClick={resetGame}>New Game</button>
                </main>
            ) : (
                <main className={gameOverScreenSCSS.gameOverMain}>
                    <h1>GAME OVER</h1>
                    <h2>Well done your Score is: {roundScore}</h2>
                    <button onClick={resetGame}>New Game</button>
                </main>
            )}
        </>
    )
}
