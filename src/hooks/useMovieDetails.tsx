import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails{
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];


}
 
const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });

    const getMovieDetails = async () =>{

       const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
       const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

       const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailsPromise,castPromise]);

       setState({
        isLoading: false,
        movieFull: movieDetailsResp.data,
        cast: castPromiseResp.data.cast
       })
    }

    useEffect(() => {
      
    getMovieDetails();
    
    }, [])
    
    return {
        ...state
    }
}

 
export default useMovieDetails