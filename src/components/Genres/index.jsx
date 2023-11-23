import PropTypes from 'prop-types'
import {Container} from "./styles"

function SpanGenres ({genres}) {

    return(
        <Container>
        {genres && genres.map(genre =>(
            <span key={genre.id}>{genre.name}</span>
        ))}
        </Container>
    )
    
}

export default SpanGenres

SpanGenres.propTypes = {
    genres: PropTypes.array
}