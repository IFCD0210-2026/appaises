import BarraBusqueda from "@/componentes/BarraBusqueda";
import ListaPaises from "@/componentes/ListaPaises";
import { fetchDatosPais } from "@/lib/fetchApi";

async function fetchNombresPaises() {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/all?fields=name`)
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    console.error("Error con pais:", error)
  }
}


export default async function Home({ searchParams }) {
  let { consulta } = await searchParams

  const dataPais = await fetchDatosPais(consulta) ?? null

  const data = await fetchNombresPaises()

  return (
    <div className="p-6 flex flex-col gap-4">
      <BarraBusqueda />
      <h1>Capital: {dataPais ? dataPais.capital : "Consulta no válida"}</h1>
      <ListaPaises paises={data}/>
    </div>
  );
}