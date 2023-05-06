import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';

const screenHight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'>{}
 
const DetailScreen = ({route, navigation}:Props) => {

    const movie = route.params;

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path}`
    
    const {isLoading, movieFull, cast} = useMovieDetails(movie.id)

    return (
        <ScrollView>
        <View style={ styles.imageContainer}>
            <View style={styles.imageBorder}>
                <Image source={{uri}}
                    style={ styles.posterImage}
                />
            </View>
        </View>
        <View style={styles.marginContainer}>
            <Text style={styles.subTitle}>{ movie.original_title}</Text>
            <Text style={styles.title}>{ movie.title}</Text>
        </View>
        <View style={{marginTop: 0}}>

            {
                isLoading   ? <ActivityIndicator size={30} color="grey" style={{marginTop: 20}}/>
                            : <MovieDetails movieFull={movieFull!} cast={cast}/>
            }


        </View>
        <View style={styles.backButton}>
            <TouchableOpacity
                onPress={() => navigation.pop()}
            >
            <Icon
                color='white'
                name="arrow-undo-outline"
                size={30}
            />
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        width: '100%',
        height: screenHight * 0.7,

        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,

    },
    imageBorder:{
        flex: 1,
        overflow:'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    posterImage: {
        flex: 1,
    },
    marginContainer:{
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle:{
        fontSize: 18,
        color: 'wheat'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    backButton:{
        position:'absolute',
        zIndex: 999,
        elevation: 9,
        top: 20,
        left: 20,
    }
})

 
export default DetailScreen