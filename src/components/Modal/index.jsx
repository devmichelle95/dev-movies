import { Container, Background, Close } from "./styles"
import PropTypes from 'prop-types'
import { useEffect, useState } from "react"
import { getMovieVideo } from "../../services/getData"

function Modal({movieId, setShowModal}) {
    const[movie, setMovie]=useState()

    useEffect (()=>{
        async function getMovies() {
           setMovie(await getMovieVideo(movieId))
          }

          getMovies()
    },[])

  return (
  <Background onClick={()=>setShowModal(false)}>
    {movie&&
  <Container>
    
    <iframe
    src={`https://www.youtube.com/embed/${movie[0].key}`}
    title="Youtube Trailer"
    height={"500px"}
    width={"100%"}
    >
    </iframe>
    <Close>
    <button onClick={()=>setShowModal(false)}>X</button>
    </Close>
  </Container>
}
  </Background>
  )
}

export default Modal

Modal.propTypes = {
    movieId: PropTypes.number , 
    setShowModal: PropTypes.bool
}