import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideo,
} from "../../services/getData"
import { Container, Background, Cover, Info, ContainerMovies } from "./styles"
import SpanGenres from "../../components/Genres"
import Credits from "../../components/Credits"
import Slider  from "../../components/Slider"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getImages from '../../utils/getImages'

function MoviesDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [video, setVideo] = useState()
  const [credits, setCredits] = useState()
  const [similar, setSimilar] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieVideo(id),
        getMovieCredits(id),
        getMovieSimilar(id),
      ])
        .then(([movie, video, credits, similar]) => {
          setMovie(movie)
          setVideo(video)
          setCredits(credits)
          setSimilar(similar)
        })
        .catch((error) => console.log(error))
    }
    getAllData()
  }, [])

  return (
    <>
{movie &&
     (
     <Background image={getImages(movie.backdrop_path)}>
      <Container>
        <Cover>
            <img src={getImages(movie.poster_path)}/>
        </Cover>
        <Info>
            <h2>{movie.title}</h2>
            <SpanGenres genres={movie.genres}/>
            <p>{movie.overview}</p>
            <div>
              <Credits credits={credits}/>
            </div>
        </Info>
      </Container>
      </Background>)}
<ContainerMovies>
  {video && video.map (trailer =>(
    <div key={trailer.id}>
      <h4>{trailer.name}</h4>
      <iframe
    src={`https://www.youtube.com/embed/${trailer.key}`}
    title="Youtube Trailer"
    height={"500px"}
    width={"100%"}
    />
    </div>
  ))} 
</ContainerMovies> 
{similar &&
(<Slider info={similar} title={'Filmes Similares'}/>)}
</>
)}

export default MoviesDetails
