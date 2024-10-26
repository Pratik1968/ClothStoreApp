import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'

const TextRegular = ({text,style}:{text:string,style?:TextStyle}) => {
  return (
    <View>
      <Text style={[style,{fontFamily:'Lato_700Bold'}]}>{text}</Text>
    </View>
  )
}

export default TextRegular