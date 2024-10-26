import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'

const TextBold = ({text,style}:{text:string,style?:TextStyle}) => {
  return (
    <View>
      <Text style={[style,{fontFamily:'Lato_900Black'}]}>{text}</Text>
    </View>
  )
}

export default TextBold