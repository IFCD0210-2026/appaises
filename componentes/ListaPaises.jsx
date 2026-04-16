"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function ListaPaises({ paises }) {

    const [pais, setPais] = useState("")
    const router = useRouter()
    const searchParams = useSearchParams()


    function buscarPais() {
        if (!pais.trim()) return

        // Construir nueva URL con el parámetro "consulta"
        const params = new URLSearchParams(searchParams); // Construye lo que hay después de: ?
        params.set("consulta", pais.trim().toLowerCase()) // consulta=peru
        // seteado los parámetros
        router.push("/?" + params.toString()) // localhost:3000/?consulta=peru
    }

    return (
        <>
            <select name="" id=""
                onChange={e => setPais(e.target.value)}

            >
                {
                    paises.map((pais, index) => <option key={index} value={pais.name.common} >{pais.translations.spa.common}</option>)
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