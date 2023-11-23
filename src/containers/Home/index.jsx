import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Background, Info, Poster, Container, ContainerButtons } from "./styles"
import Button from "../../components/Button"
import Slider from '../../components/Slider'
import Modal from "../../components/Modal"
import getImages from "../../utils/getImages"
import{ getMovies, getTopMovies, getTopSeries, getPopSeries, getPeople} from '../../services/getData'


function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovie, setTopMovie] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popSeries, setPopSeries] = useState()
  const [people, setPeople] = useState()
  const navigate = useNavigate()

  useEffect (()=> {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopSeries(),
        getPeople(),
      ]).then(([movie, topMovie, topSeries, popSeries, people]) =>{
        setMovie(movie)
        setTopMovie(topMovie)
        setTopSeries(topSeries)
        setPopSeries(popSeries)
        setPeople(people)
      }).catch((error)=>console.log(error))
      }
      getAllData()
},[])



  return (
    <>
    {movie && (
    <Background img={getImages(movie.backdrop_path)}>
      {showModal&& <Modal movieId={movie.id} setShowModal={setShowModal}/>}
        <Container>
        <Info>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <ContainerButtons>
        <Button 
        red 
        onClick={()=> navigate(`/details/${movie.id}`)}>
          Assista Agora</Button>
        <Button onClick={()=> setShowModal(true)}>Assista o Trailer</Button>
      </ContainerButtons>
      </Info>
      <Poster>
        <img alt='capa-do-filme' src={getImages(movie.poster_path) }/>
      </Poster>
      </Container>
      {topMovie && <Slider info={topMovie} title={'Top Filmes'}></Slider>}
      {topSeries && <Slider info={topSeries} title={'Top Séries'}></Slider>}
      {popSeries && <Slider info={popSeries} title={'Séries Populares'}></Slider>}
      {people && <Slider info={people} title={'Atores Populares'}></Slider>}
    </Background>
    )}
    </>    
)
}

export default Home;
