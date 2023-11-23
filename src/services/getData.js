import api from "./api"

export async function getMovies (){
    const {data:{results}} = await api.get("/movie/popular")
    return results[1]
}

export async function getTopMovies (){
    const {data:{results}} = await api.get("/movie/top_rated")
    return results
}

export async function getMoviesPlaying (){
    const {data:{results}} = await api.get("/movie/now_playing")
    return results
}

export async function getMoviesPop(){
    const {data:{results}} = await api.get("/movie/popular")
    return results
}

export async function getMoviesUp(){
    const {data:{results}} = await api.get("/movie/upcoming")
    return results
}

export async function getMovieVideo(movieId) {
    const {data:{results}} = await api.get(`/movie/${movieId}/videos`)
    return results

}

export async function getMovieCredits(movieId) {
    const {data:{cast}} = await api.get(`/movie/${movieId}/credits`)
    return cast

}

export async function getMovieSimilar() {
    const {data:{results}} = await api.get("/movie/now_playing")
    return results
}

export async function getMovieById(movieId) {
    const {data} = await api.get(`/movie/${movieId}`)
    return data
}

export async function getTopSeries (){
    const {data:{results}} = await api.get("/tv/top_rated")
    return results
}

export async function getPopSeries (){
    const {data:{results}} = await api.get("/tv/popular")
    return results
}

export async function getSerieById(serieId) {
    const {data} = await api.get(`/tv/${serieId}`)
    return data
}

export async function getSeriesNow (){
    const {data:{results}} = await api.get("/tv/on_the_air")
    return results
}

export async function getSeriesToday (){
    const {data:{results}} = await api.get("/tv/airing_today")
    return results
}

export async function getSeriesCredits (seriesId){
    const {data:{results}} = await api.get(`
    tv/${seriesId}/aggregate_credits`)
    return results
}

export async function getPeople (){
    const {data:{results}} = await api.get("/person/popular")
    return results
}



