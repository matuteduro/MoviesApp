import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigation';
import { CommonActions } from '@react-navigation/native';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;

}
 
const MoviePoster = ({movie, height = 420, width = 300} : Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
        onPress={ () => navigation.dispatch(CommonActions.navigate('DetailScreen', movie))}
        activeOpacity={0.77} 
        style={{
            width,
            height,
            marginHorizontal: 7.9,
            paddingBottom: 20,
            paddingHorizontal: 7
            }}>
            <View style={ styles.imageContainer}>
                <Image source={{uri}}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer:{
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    }
})

 
export default MoviePoster