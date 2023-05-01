import React,{useEffect, useState} from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';
 
const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [peliculasCartelera, setPeliculasCartelera] = useState<Movie[]>([])

    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setPeliculasCartelera(resp.data.results);
        
        setIsLoading(false);
    }

    useEffect(() =>{
        getMovies();
    }, [])

    return {
        peliculasCartelera,
        isLoading,
    }
}

 
export default useMovies