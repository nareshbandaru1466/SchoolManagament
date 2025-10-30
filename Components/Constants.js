import { View, Text, Dimensions } from 'react-native'
import React from 'react'

export default {
    Height: Dimensions.get('screen').height,
    Width: Dimensions.get('window').width,
    PrimaryFont: 'Poppins-Regular',
    SecondaryFont: "BreeSerif-Regular",
    APIURL: 'https://osms.adef.tech'

}




const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 372;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};





export const SpacingSize = {
paddingTiny : 2,
paddingSmall : 4,
paddingMedium: 8,
paddingLarge: 16,
marginTiny : 4,
marginSmall : 8,
margingMedium: 10,
marginLarge: 16,
marginExtraLarge: 18,
fontsizeSmall:12,
fontsizeMedium:14,
fontsizeLarge:16,
fontsizeExtraLarge:18,
fontsizeDoubleExtraLarge:24,
scalewMedium:16

}