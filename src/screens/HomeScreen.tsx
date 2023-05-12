import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import useMovies from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

    const { top } = useSafeAreaInsets();


    return (
        <>
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
        </>
    );
}


export default HomeScreen
