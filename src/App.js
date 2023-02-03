import "./App.scss"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Loading from "./components/Loading"
import { useEffect, useState } from "react"

function App() {
    const [loading, setLoading] = useState(false)
    const [initialLoad, setInitialLoad] = useState(true)
    const [gameOver, setGameOver] = useState(false) //might need to move this down//
    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [clickedCards, setClickedCards] = useState([])
    //use usecontext to allow for current score to be upgraded

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
            setCurrentScore(0)
            setClickedCards([])
        } else {
            setCurrentScore(currentScore + 1)
            setClickedCards([...clickedCards, targetClass])
        }
    }

    return (
        <>
            <Nav currentScore={currentScore} bestScore={bestScore} />
            {loading ? (
                <Loading />
            ) : (
                <Main checkForSameCard={checkForSameCard} />
            )}
        </>
    )
}

export default App
