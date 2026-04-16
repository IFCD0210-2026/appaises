"use client"

import { useState } from "react"

export default function ListaPaises({ paises }) {

    const [pais, setPais] = useState("")

    function buscarPais() {
        console.log(pais)
    }
    return (
        <>
            <select name="" id=""
                onChange={e => setPais(e.target.value)}

            >
                {
                    paises.map((pais, index) => <option key={index} value={pais.name.common} >{pais.name.official}</option>)
                }
            </select>
            <button
                onClick={buscarPais}
            >
                Enviar
            </button>
        </>
    )
}