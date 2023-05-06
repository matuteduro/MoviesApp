import React from 'react'
import { Text, View, FlatList } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';


interface Props{
    movieFull: MovieFull;
    cast: Cast[]
}
 
const MovieDetails = ({movieFull, cast}: Props) => {
    return (
        <>
           <View style={{marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
                <Icon name="star-outline"color="grey"size={20}   />
                <Text style={{fontSize: 17, color:'white'}}> { movieFull.vote_average}</Text>
                <Text style={{marginLeft: 5,fontSize: 17, color:'white'}}>
                    - {movieFull.genres.map( g => g.name).join(', ')}
                </Text>
            </View>

            <Text style={{ fontSize: 22, marginTop: 11, fontWeight: 'bold', color:'white'}}>
                Synopsis
            </Text>

            <Text style={{fontSize: 17, color:'white'}}>{movieFull.overview}</Text>
            <Text style={{ fontSize: 22, marginTop: 11, fontWeight: 'bold', color:'white'}}>
                Presupuesto
            </Text>
            <Text style={{fontSize: 17, color:'white'}}>{ currencyFormatter.format(movieFull.budget,{ code:'USD'})}</Text>

            <View style={{ marginTop: 11,  marginBottom: 100}}>
            <Text style={{ fontSize: 22, marginTop: 11, fontWeight: 'bold', color:'white', marginHorizontal: 20, marginBottom:10}}> 
            Actores
            </Text>
            <FlatList
                data={cast}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=>  <CastItem actor={item}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 10, height: 70}}
            />

            </View>
           </View>
        </>
    )
}

 
export default MovieDetails