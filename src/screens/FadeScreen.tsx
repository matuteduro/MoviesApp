import React, { useRef, useEffect } from 'react'
import { Text, View, StyleSheet, Animated, Button } from 'react-native';
import useFade from '../hooks/useFade';

const FadeScreen = () => {

    const {opacity, fadeIn, fadeOut} = useFade();
   

    return (
        <View style={{ flex: 1, backgroundColor: '#3f3f3f', justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={{
                backgroundColor: 'pink',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                opacity,
                marginBottom: 10,
            }}>

            </Animated.View>

            <Button
                title="FadeIn"
                onPress={fadeIn}
            />
            <Button
                title="FadeIn"
                onPress={fadeOut}
            />
        </View>
    )
}


export default FadeScreen