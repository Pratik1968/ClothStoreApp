import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import TextBold from '../../comman/TextBlack';
import Feather from '@expo/vector-icons/Feather';
import { HorizontalPaddingDimension, TopPaddingDimension } from '../../comman/dimension';
import { calcHeight, calcTextSize, calcWidth } from '../../../utility/res';
import Expanded from '../../component/Expanded';
import { GRAY_200_COLOR, GRAY_400_COLOR, GRAY_500_COLOR } from '../../comman/color';
const Header = () => {
  return (
    <View style={style.container}>
  <HeaderContainer/>
    </View>
  )
}
const HeaderContainer = ()=>{
    return(
<View style={style.header}>

 
 <View style={style.titleContainer}>
     <TextBold text='My Carts' style={style.headerText}/>
 </View>
 <View style={style.backButton}>
    <Ionicons name="arrow-back"  size={24} color="black" onPress={()=>router.back()} />
</View>
</View>
    )
}

const style = StyleSheet.create({
    container:{
        
        display:'flex',
        paddingHorizontal:HorizontalPaddingDimension
    },
    header:{
        position:'relative',
        display:'flex',
justifyContent:'center',
alignItems:'center',
paddingVertical:calcHeight(2),

    },
    backButton:{
    position:'absolute',
    left:0,
    top:0,
    bottom:0,
   
   display:'flex',
   alignItems:'center',
   justifyContent:'center',
  
    },
    titleContainer:{
        position:'absolute',
    left:0,
    right:0,
    top:0,
    bottom:0,
        backgroundColor:'transparent',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        fontSize:calcTextSize(4),
    },
   
})
export default Header