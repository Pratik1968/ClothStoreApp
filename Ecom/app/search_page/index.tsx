import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './(component)/header'
import { calcHeight, calcWidth } from '../../utility/res'
import ListItem from '../home_page/(component)/ListItem'
import useGetProductsSearch from '../../api/products/getProductsSearch'
import GridListItem from '../home_page/(component)/GridListItem'

const SearchPage = () => {
  const [data,setData] = useState([])
  const [searchText,setSearchText] = useState("")
 const {refetch} =useGetProductsSearch(searchText,setData)

  useEffect(()=>{
    
    refetch()
console.log(data)
  },[searchText])
  return (
    <>
    <Stack.Screen
    options={{
        headerShown:false
    }}
    />
        <StatusBar backgroundColor={'white'}/>

    <SafeAreaView style={style.container}>
      <Header searchText={searchText} setSearchText={setSearchText}/>
      <FlatList
style={style.list}
    data={data}
    numColumns={2}
    renderItem={({item})=>{
return (
<GridListItem data={item}/>
)
    }}    
    removeClippedSubviews={true} 
    showsVerticalScrollIndicator={false}
    initialNumToRender={2} 
    maxToRenderPerBatch={1} 
    contentContainerStyle={{
     
        gap:calcWidth(5),

    }}
    columnWrapperStyle={{
        gap:calcWidth(5),
    }}
    updateCellsBatchingPeriod={100} 
    windowSize={7}
    />
    </SafeAreaView>
    </>
  )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    list:{
        flex:1,
            marginTop:calcHeight(5),
            paddingHorizontal:calcWidth(5),
        },
})

export default SearchPage