"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"



export default function BarraBusqueda() {
    const [texto, setTexto] = useState("")
    const router = useRouter()
    const searchParams = useSearchParams()

    function buscar() {
        if (!texto.trim()) return

        // Construir nueva URL con el parámetro "consulta"
        const params = new URLSearchParams(searchParams);
        // seteado los parámetros
        params.set("consulta", texto.trim().toLowerCase())
        router.push("/?" + params.toString())
        setTexto("")
    }

    return (
        <>
        <select name="" id="">
            option
        </select>
            <input
                className="bg-white" type="text"
                onChange={(e) => setTexto(e.target.value)}
                onKeyDown={(e) => e.key == "Enter" && buscar()}
                value={texto}
                placeholder="Esribe un país"
            />
            <button
                className="bg-red-800 text-white p-2"
                onClick={buscar}
            >
                Enviar
            </button>
        </ >
    )
}