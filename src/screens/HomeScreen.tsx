import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native';
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import useMovies from '../hooks/useMovies';
import ImageColors from 'react-native-image-colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';


const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const { setMainColors } = useContext( GradientContext )

    const getPosterColors = async (index:number) => {
        
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path}`

        const [primary = 'black', secondary= 'black' ] = await getImageColors(uri);

        setMainColors({primary, secondary})
    }   

    useEffect(() => {
        if( nowPlaying.length > 0 ) {
            getPosterColors(0)
        }
    }, [ nowPlaying ])
    
    return (
            <GradientBackground >
                <ScrollView>
                    <View style={{ marginTop: top + 20 }}>
                        {isLoading ? (
                            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                                <ActivityIndicator color="white" size={200} />
                            </View>
                        ) : (
                            <>
                                <View style={{
                                    height: 440,
                                }}>
                                    {/* Carousel Principal */}
                                    <Carousel
                                        data={nowPlaying}
                                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                                        sliderWidth={windowWidth}
                                        itemWidth={300}
                                        inactiveSlideOpacity={0.9}
                                        onSnapToItem={(index => getPosterColors(index))}
                                    />
                                </View>
                                <HorizontalSlider title="Popular" movies={popular} />
                                <HorizontalSlider title="Top Rated" movies={topRated} />
                                <HorizontalSlider title="Upcoming" movies={upcoming} />



                            </>
                        )}
                    </View>
                </ScrollView>
            </GradientBackground>
    );
}


export default HomeScreen
