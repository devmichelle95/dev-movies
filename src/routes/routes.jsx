import {Route, Routes} from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/default'
import MoviesDetails from '../containers/Movies_Details'
import SeriesDetails from '../containers/Series_Details'

function MyRoutes () {
    return (
        <Routes>
            <Route element={<DefaultLayout/>}>
                <Route path ='/' element={<Home/>}/>
                <Route path ='/movies' element={<Movies/>}/>
                <Route path ='/series' element={<Series/>}/>
                <Route path ='/details/:id' element={<MoviesDetails/>}/>
                <Route path = '/series/details/:id' element={<SeriesDetails/>}/>
            </Route>
        </Routes>
    )
}

export default MyRoutes