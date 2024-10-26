import { View, Text , StyleSheet, TextInput, TextInputProps} from 'react-native'
import React, { ReactNode } from 'react'
import TextBlack from '../../comman/TextBlack'
import TextBold from '../../comman/TextBlack'
import { calcHeight, calcTextSize, calcWidth } from '../../../utility/res'
import { GRAY_100_COLOR, PRIMARY_COLOR } from '../../comman/color'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const TextInputWithLabelAndIcon = ({icon,label,error,...props}:{icon:ReactNode,label:string,props?:TextInputProps, error:boolean}) => {
    const style = StyleSheet.create({
        container:{
            display:'flex',
            gap:calcHeight(2),
    
        },
        row:{
            display:'flex',
            flexDirection:'row',
          borderWidth:1,
          borderColor:(error)?PRIMARY_COLOR:GRAY_100_COLOR,
          paddingVertical:calcHeight(2), 
          paddingHorizontal:calcWidth(3),
          borderRadius:8, 
          gap:10,
alignItems:'center'
        },
        input:{
            flex:1,
            fontFamily:'Lato_400Regular',
    fontSize:calcTextSize(5),

        }
    })
    return (
    <View style={style.container}>
<TextBlack text={label}/>
    <View style={style.row}>
        {icon}
        <TextInput
        selectionColor={PRIMARY_COLOR}
      {...props}
        style={style.input}
        />
{ (error) &&      <MaterialIcons name="error" size={24} color={PRIMARY_COLOR} />}  
  </View>
    </View>
  )
}

export default TextInputWithLabelAndIcon