import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import { RootStackParamList } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'>{}
 
const DetailScreen = ({route}:Props) => {

    const movie = route.params;

    
    


    return (
        <View>
            <Text>
                Detail Screen
            </Text>
        </View>
    )
}

 
export default DetailScreen