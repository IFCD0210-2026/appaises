import BarraBusqueda from "@/componentes/BarraBusqueda";
import ListaPaises from "@/componentes/ListaPaises";
import { fetchDatosPais, fetchNombresPaises } from "@/lib/fetchApi";




export default async function Home({ searchParams }) {
  let { consulta } = await searchParams // URL


  const dataPais = await fetchDatosPais(consulta) ?? null

  const data = await fetchNombresPaises()

  return (
    <div className="p-6 flex flex-col gap-4">
      <BarraBusqueda />
      <h1>Capital: {dataPais ? dataPais.capital : "Consulta no válida"}</h1>
      <ListaPaises paises={data} />
    </div>
  );
}