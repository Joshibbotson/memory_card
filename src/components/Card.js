import { Component } from "react"
import cardSCSS from "./card.module.scss"

//card should create a card object via a factory function
export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
        }
    }
    render() {
        return (
            <div className={cardSCSS.card}>
                <div className={cardSCSS.img}></div>
            </div>
        )
    }
}
