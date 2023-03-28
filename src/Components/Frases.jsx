
export default function Frases({ valor }) {
    // VanillaTilt.init(document.querySelector(".App__text"), {
    //     max: 25,
    //     speed: 400,
    //     glare: true,
    //     "max-glare": 1,
    // });
    return (
        <>
            <p className='App__text'>{valor.phrase}<br />
                <span className="App__span">Autor: {valor.author}</span>
            </p>

        </>
    )
}
