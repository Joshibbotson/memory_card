import gameBoardSCSS from "./gameBoard.module.scss"
import uniquid from "uniquid"
import Card from "../cards/Card"

export default function GameBoard({ checkForSameCard }) {
    let cardImgClassArr = [
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
    let cardImgClassArrRand = randomiseArrOrder(cardImgClassArr)
    function randomiseArrOrder(arr) {
        const newArr = []
        let i
        while (newArr.length !== arr.length) {
            i = Math.floor(Math.random() * arr.length)
            if (!newArr.includes(arr[i])) {
                newArr.push(arr[i])
            }
        }
        return newArr
    }

    return (
        <section>
            {cardImgClassArrRand.map(imgClass => {
                return (
                    <Card
                        key={uniquid()}
                        imgClass={imgClass}
                        checkForSameCard={checkForSameCard}
                    />
                )
            })}
        </section>
    )
}
