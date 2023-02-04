import React from "react"
import navSCSS from "./nav.module.scss"

export default function Nav({ currentScore, bestScore }) {
    return (
        <nav>
            <h1>JUST CATS</h1>
            <div className={navSCSS.navRight}>
                <h2>Current Score: {currentScore}</h2>
                <h2>Best Score: {bestScore}</h2>
            </div>
        </nav>
    )
}
