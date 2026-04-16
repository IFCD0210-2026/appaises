export const fetchDatosPais = async (pais) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${pais}`)
    const data = await res.json()
    let dataPais = data[0] ?? null
    console.log(dataPais)
    return dataPais
  } catch (error) {
    console.error("Error con pais:", error)
  }
}