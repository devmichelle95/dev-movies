import { Container, Background, Cover, Info} from "./styles"
import SpanGenres from "../../components/Genres"
import Credits from "../../components/Credits"
import { getSerieById, getSeriesCredits } from "../../services/getData"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getImages from "../../utils/getImages"

function SeriesDetails() {
  const{id}=useParams()
  const [serie, setSerie] = useState()
  const [tvCredits, setTvCredits] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getSerieById(id),
        getSeriesCredits(id)
      ])
      .then(([serie, tvCredits]) => {
        setSerie(serie)
        setTvCredits(tvCredits)
      })
      .catch((error) => console.log(error))
  }
  getAllData()
}, [])
  return (
    <>
    {serie && (
      <Background image={getImages(serie.backdrop_path)} >
      <Container>
        <Cover>
            <img src={getImages(serie.poster_path)}/>
        </Cover>
        <Info>
            <h2>{serie.title}</h2>
            <SpanGenres genres={serie.genres}/>
            <p>{serie.overview}</p>
            <div>
              <Credits credits={tvCredits}/>
            </div>
        </Info>
      </Container>
      </Background>
    )}
         
    </>
  )
  }
export default SeriesDetails
