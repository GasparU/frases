import React from 'react'
import phrases from '../utils/phrases.json';
import LogicPhrase from './Logic';
export default function Button({ setValor, setNumberImg }) {
    const ejecutar = () => {
        setValor(LogicPhrase(phrases))
        setNumberImg(LogicPhrase([1, 2, 3, 4, 5, 6, 7, 8]))

    };
    return (
        <>
            <button className='App__button' onClick={ejecutar}>Probar Suerte</button>
        </>
    )
}
