import { View, Text, TouchableOpacity, StyleSheet, StyleProp } from 'react-native'
import React from 'react'
import { PRIMARY_COLOR } from '../comman/color'
import TextRegular from '../comman/TextRegular'
import { calcWidth } from '../../utility/res'
import TextBold from '../comman/TextBlack'

const PrimaryButton = ({text,onPress,style}:{text:string,onPress:()=>void,style?:StyleProp<View>}) => {
  
    return (
    <TouchableOpacity style={[internalStyle.container,style]} onPress={onPress}>
        <TextBold text={text} style={internalStyle.text}/>
    </TouchableOpacity>
  )
}
const internalStyle = StyleSheet.create({
container:{
    backgroundColor:PRIMARY_COLOR,
display:'flex',
alignItems:'center',
justifyContent:'center',
padding:calcWidth(2),
borderRadius:calcWidth(5),
},
text:{
 color:'white',
}
})

export default PrimaryButton