import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props{
    children: JSX.Element | JSX.Element[]
}
 
const GradientBackground = ({ children } : Props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'red'}}>
            <LinearGradient
                colors={['#7d2792', '#9e31b9', 'white']}
                style={{...StyleSheet.absoluteFillObject}}
                start={{ x:0.1, y:0.1}}
                end={{x:0.5, y:0.7}}
            />
            {children}
        </View>
    )
}

export default GradientBackground