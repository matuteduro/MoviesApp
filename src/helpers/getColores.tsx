import ImageColors from 'react-native-image-colors'

export const getImageColors = async (uri: string) => {
        
    const colors = await ImageColors.getColors(uri,{});

    let primary;
    let secondary;

    if (colors.platform === 'android'){
        primary = colors.dominant;
        secondary = colors.darkVibrant;
    }
    else{
        primary = colors.platform;
        secondary = colors.platform;
    }

    return [primary,secondary]
}   