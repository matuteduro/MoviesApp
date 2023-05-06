import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast
}

const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
        <View style={styles.container}>
            {
                actor.profile_path && (
                    <Image
                        source={{ uri }}
                        style={{ width: 50, height: 50, borderRadius: 12, marginRight: 10 }}
                    />
                )
            }
            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: "white" }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: "wheat" }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#3c3152',
        borderRadius: 17,
        height: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
        marginLeft: 20,
        paddingRight: 7,


    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 2,
    }
});


export default CastItem