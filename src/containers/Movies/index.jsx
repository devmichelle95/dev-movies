import { useState, useEffect } from "react"
import { Container } from "./styles"
import Slider from "../../components/Slider"
import { getMoviesPlaying, getMoviesPop, getTopMovies, getMoviesUp } from "../../services/getData"

function Movies () {
    const [moviesTop, setMoviesTop] = useState()
    const [moviesPlaying, setMoviesPlaying] = useState()
    const [moviesPop, setMoviesPop] = useState()
    const [moviesUp, setMoviesUp] = useState()

    useEffect (()=> {
        async function getAllData() {
          Promise.all([
            getTopMovies(),
            getMoviesPlaying(),
            getMoviesPop(),
            getMoviesUp()
        ]).then(([moviesTop, moviesPlaying, moviesPop, moviesUp]) =>{
            setMoviesTop(moviesTop),
            setMoviesPlaying(moviesPlaying),
            setMoviesPop(moviesPop),
            setMoviesUp(moviesUp)

        }).catch((error)=>console.log(error))
    }
    getAllData()
},[])
    return(
        <>
        <Container>
            {moviesTop && (<Slider info={moviesTop} title={'Top Filmes'}/>)}
            {moviesPlaying && (<Slider info={moviesPlaying} title={'Filmes em Exibição'}/>)}
            {moviesPop && (<Slider info={moviesPop} title={'Filmes Populares'}/>)}
            {moviesUp && (<Slider info={moviesUp} title={'Em breve'}/>)}
        </Container>
        </>
    )
}

export default Movies