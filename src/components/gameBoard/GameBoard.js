import { useState } from "react"

function GameBoard() {
    const [gameOver, setGameOver] = useState(false)
    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(() => {
        setBestScore(currentScore)
        if (currentScore > bestScore) {
            setBestScore(currentScore)
        }
    })

    return <></>
}
