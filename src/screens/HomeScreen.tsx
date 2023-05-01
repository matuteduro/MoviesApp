import React from 'react'
import { ActivityIndicator, Text, View, } from 'react-native';
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import useMovies from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

    const { peliculasCartelera, isLoading } = useMovies(); 

    const { top } = useSafeAreaInsets();


    return (
        <>
        <View style={{ marginTop: top + 20 }}>
            {isLoading ? (
                <View style={{ flex:1, justifyContent: 'center', alignContent: 'center'}}>
                    <ActivityIndicator color="white" size={200}/>
                </View>
            ) : (

                <View style={{
                    height: 440,
                }}>
                {/* Carousel Principal */}
                    <Carousel
                        data={ peliculasCartelera }
                        renderItem={ ({ item }: any) => <MoviePoster movie={item}/>}
                        sliderWidth={ windowWidth}
                        itemWidth={300}                
                    />
                </View>
                
            )}
            </View>
        </>
    );
}


export default HomeScreen
