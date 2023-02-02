import "./App.scss"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Loading from "./components/Loading"
import { useEffect, useState } from "react"

function App() {
    const [loading, setLoading] = useState(false)
    const [initialLoad, setInitialLoad] = useState(true)
    const [gameOver, setGameOver] = useState(false) //might need to move this down//
    const [currentScore, setCurrentScore] = useState(3)
    const [bestScore, setBestScore] = useState(0)
    //use usecontext to allow for current score to be upgraded

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    useEffect(() => {
        const runLoadingScreen = async () => {
            setLoading(true)
            await timeout(1500)

            setLoading(false)
        }
        initialLoad ? runLoadingScreen() : setInitialLoad(false)
    }, [initialLoad])

    useEffect(() => {
        if (currentScore > bestScore) {
            setBestScore(currentScore)
        }
    }, [currentScore])

    return (
        <>
            <Nav currentScore={currentScore} bestScore={bestScore} />
            {loading ? <Loading /> : <Main />}
        </>
    )
}

export default App
