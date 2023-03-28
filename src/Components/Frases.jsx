export default function Frases({ valor }) {
    return (
        <>
            <p className='App__text'>{valor.phrase}<br />
                <span className="App__span">Autor: {valor.author}</span>
            </p>

        </>
    )
}
