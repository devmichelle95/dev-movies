import { getSeriesNow, getTopSeries, getPopSeries, getSeriesToday } from "../../services/getData"
import { useState, useEffect } from "react"
import { Container } from "./styles"
import Slider from "../../components/Slider"

function Series () {
    const [seriesNow, setSeriesNow] = useState()
    const [seriesToday, setSeriesToday] = useState()
    const [seriesPop, setSeriesPop] = useState()
    const [seriesTop, setSeriesTop] = useState()

    useEffect (()=> {
        async function getAllData() {
          Promise.all([
            getSeriesNow(),
            getSeriesToday(),
            getTopSeries(),
            getPopSeries(),
        ]).then(([seriesNow, seriesToday, seriesPop, seriesTop]) =>{
            setSeriesNow(seriesNow),
            setSeriesToday(seriesToday),
            setSeriesPop(seriesPop)
            setSeriesTop(seriesTop)

        }).catch((error)=>console.log(error))
    }
    getAllData()
},[])
    return(
<>
    <Container>
    {seriesNow && (<Slider info={seriesNow} title={'Series no Ar'}/>)}
    {seriesToday && (<Slider info={seriesToday} title={'Series de Hoje'}/>)}
    {seriesPop && (<Slider info={seriesPop} title={'Series Populares'}/>)}
    {seriesTop && (<Slider info={seriesTop} title={'Series Top'}/>)}

    </Container>

        </>

    )
}

export default Series