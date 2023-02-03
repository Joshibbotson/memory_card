import "./App.scss"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Loading from "./components/Loading"
import GameOverScreen from "./components/gameOverScreen/GameOverScreen"
import { useEffect, useRef, useState } from "react"

function App() {
    const [loading, setLoading] = useState(false)
    const [initialLoad, setInitialLoad] = useState(true)
    const [gameOver, setGameOver] = useState(false)
    const [currentScore, setCurrentScore] = useState(0)
    const roundScore = useRef()
    const [bestScore, setBestScore] = useState(0)
    const [clickedCards, setClickedCards] = useState([])

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    useEffect(() => {
        const runLoadingScreen = async () => {
            setLoading(true)
            const randomMs = Math.floor(Math.random() * 1500)
            const randomMsMinMax = (min, max) => {
                return min + Math.floor(Math.random() * (max - min))
            }

            await timeout(randomMsMinMax(500, 1500))

            setLoading(false)
        }
        initialLoad ? runLoadingScreen() : setInitialLoad(false)
    }, [initialLoad])

    useEffect(() => {
        if (currentScore > bestScore) {
            setBestScore(currentScore)
        }
    }, [currentScore])

    function checkForSameCard(e) {
        const targetClass = e.target.className
        if (clickedCards.includes(targetClass)) {
            roundScore.current = currentScore
            setCurrentScore(0)
            setClickedCards([])
            setGameOver(!gameOver)
        } else {
            setCurrentScore(currentScore + 1)
            setClickedCards([...clickedCards, targetClass])
        }
    }

    function resetGame() {
        setCurrentScore(0)
        setInitialLoad(true)

        roundScore.current = 0
        setClickedCards([])
        setGameOver(!gameOver)
    }

    return (
        <>
            <Nav currentScore={currentScore} bestScore={bestScore} />
            {loading ? (
                <Loading />
            ) : (
                <Main
                    checkForSameCard={checkForSameCard}
                    roundScore={roundScore.current}
                    gameOver={gameOver}
                    setGameOver={setGameOver}
                    resetGame={resetGame}
                />
            )}
        </>
    )
}

export default App
