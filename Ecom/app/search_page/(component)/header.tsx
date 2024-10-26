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
const Header = ({setSearchText,searchText}:{setSearchText:Function,searchText:string}) => {
  return (
    <View style={style.container}>
  <HeaderContainer/>

  <InputContainer searchText={searchText} setSearchText={setSearchText}/>
    </View>
  )
}
const HeaderContainer = ()=>{
    return(
<View style={style.header}>

 
 <View style={style.titleContainer}>
     <TextBold text='Find Products' style={style.headerText}/>
 </View>
 <View style={style.backButton}>
    <Ionicons name="arrow-back"  size={24} color="black" onPress={()=>router.back()} />
</View>
</View>
    )
}
const InputContainer = ({searchText,setSearchText}:{searchText:string,setSearchText:Function})=>{
    return(
        <View style={style.InputContainer}>
   <Feather name="search" size={24} color="black" /> 
      <TextInput
      style={style.input}
      value={searchText}
      onChangeText={(value)=>setSearchText(value)}
      />
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
    InputContainer:{
        backgroundColor:GRAY_400_COLOR,
        display:'flex',
        flexDirection:'row',
      gap:calcWidth(3),
padding:calcWidth(3.6),
marginTop:calcHeight(2),
borderRadius:calcWidth(2)
},
input:{
    flex:1,
    height:'100%',
    color:GRAY_500_COLOR,
}
})
export default Header