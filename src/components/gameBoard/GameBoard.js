import { useState } from "react"
import Card from "../cards/Card"

export default function GameBoard() {
    const [gameOver, setGameOver] = useState(false)
    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const cardImgClassArr = [
        "card1",
        "card2",
        "card3",
        "card4",
        "card5",
        "card6",
        "card7",
        "card8",
        "card9",
        "card10",
        "card11",
        "card12",
    ]

    return (
        <>
            {cardImgClassArr.map(imgClass => {
                return <Card imgClass={imgClass} />
            })}
        </>
    )
}
