// Llama a los datos de un país concreto
export const fetchDatosPais = async (pais) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${pais}`)
    const data = await res.json()
    let dataPais = data[0] ?? null
    return dataPais
  } catch (error) {
    console.error("Error con pais:", error)
  }
}

// Trae los nombres de todos los países del mundo
export async function fetchNombresPaises() {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/all?fields=name,translations`)
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    console.error("Error con pais:", error)
  }
}