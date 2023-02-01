import loadingSCSS from "./loading.module.scss"

export default function Loading() {
    return (
        <main>
            <div className={loadingSCSS.loadingImage}></div>
            <h1>L O A D I N G . . .</h1>
        </main>
    )
}
