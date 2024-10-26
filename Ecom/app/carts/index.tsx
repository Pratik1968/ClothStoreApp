import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { calcHeight, calcWidth } from '../../utility/res'
import ListItem from '../home_page/(component)/ListItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './(component)/header'
import PrimaryButton from '../component/PrimaryButton'

const Carts = () => {
    const data = useSelector((state:RootState)=>state.carts.value)
  const sum =data.reduce((sum, item) => sum + Number(item.price.replace('$','')), 0)
    return (
    <>
    <Stack.Screen
    options={{
        headerShown:false
    }}
    />
    <SafeAreaView style={style.container}>
<Header/>
<FlatList
style={style.list}
    data={data}
    numColumns={1}
    renderItem={({item})=>{
return (
<ListItem data={item}/>
)
    }}    
    removeClippedSubviews={true} 
    showsVerticalScrollIndicator={false}
    initialNumToRender={2} 
    maxToRenderPerBatch={1} 
    contentContainerStyle={{
     
        gap:calcWidth(5),

    }}
   
    updateCellsBatchingPeriod={100} 
    windowSize={7}
    />
    </SafeAreaView>
    <PrimaryButton text={`GO TO CHECKOUT($${sum})`} style={style.button}/>
    </>
  )
}
const style  = StyleSheet.create({
    container:{
backgroundColor:'white',
flex:1,
    },
    list:{
        flex:1,
            marginTop:calcHeight(5),
            paddingHorizontal:calcWidth(5),
        },
        button:{
            position:'absolute',
            bottom:calcHeight(5),
            right:calcWidth(5),
            left:calcWidth(5),
            height:calcHeight(7)
        }
})
export default Carts