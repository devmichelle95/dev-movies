import getImages from '../../utils/getImages'
import {Container} from './styles'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function Card ({item}) {
    const navigate = useNavigate()
    return (
        <Container>
            <img src={getImages(item.poster_path || item.profile_path || '')}
            alt={`${item.title || item.name} movie poster`} onClick={()=> navigate(`/details/${item.id}`)}/>
            <h3>{item.title || item.name}</h3>
        </Container>
    )
}
export default Card

Card.propTypes = {
    item: PropTypes.object  
}