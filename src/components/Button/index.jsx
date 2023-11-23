import PropTypes from 'prop-types'
import { ButtonRed, ButtonWhite} from "./styles"

function Button ({children, red, ...props}) {

    return(
        <>{red ? (<ButtonRed{...props}>{children}</ButtonRed>) : (<ButtonWhite {...props}>{children}</ButtonWhite>)}      
        
        </>
    )
    
}

export default Button

Button.propTypes = {
    children: PropTypes.string,
    red: PropTypes.bool
}