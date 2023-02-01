import "./App.scss"
import Main from "./components/Main"
import Loading from "./components/Loading"
import { useEffect, useState } from "react"

function App() {
    const [loading, setLoading] = useState(false)
    const [initialLoad, setInitialLoad] = useState(true)

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

    return <>{loading ? <Loading /> : <Main />}</>
}

export default App
