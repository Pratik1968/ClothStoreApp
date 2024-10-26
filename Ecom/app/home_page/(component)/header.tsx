import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TextBlack from '../../comman/TextBlack'
import { calcTextSize, calcWidth } from '../../../utility/res'
import { HorizontalPaddingDimension, TopPaddingDimension } from '../../comman/dimension'
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { router } from 'expo-router'
const Header = () => {
  return (
    <View style={style.container}>
      <TextBlack text="Zyra" style={style.title}/>
   <Group/>
    </View>
  )
}
const Group = ()=>{
    return(
        <View style={style.group}>
<Feather name="shopping-bag" size={24} color="black" onPress={()=>router.push('../carts')}/>
<Feather name="search" size={24} color="black" onPress={()=>router.push('../search_page')} />
        </View>
    )
}
const style = StyleSheet.create({
    title:{
        fontSize:calcTextSize(6)
    },
    container:{
        paddingHorizontal:HorizontalPaddingDimension,
        paddingTop:TopPaddingDimension,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white'
        
    },
    group:{
        display:'flex',
        flexDirection:'row',
        gap:calcWidth(1)
    }
})
export default Header