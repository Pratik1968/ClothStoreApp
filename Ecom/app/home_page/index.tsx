import { View, Text, StyleSheet, FlatList, Alert, StatusBar, Pressable } from 'react-native'
import React, { useState } from 'react'
import Feather from "@expo/vector-icons/Feather";
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './(component)/header'
import { Product } from '../type/products'
import { calcHeight, calcWidth } from '../../utility/res'
import useGetProducts from '../../api/products/getProducts'
import ListItem from './(component)/ListItem'
import GridListItem from './(component)/GridListItem';
import { PRIMARY_COLOR } from '../comman/color';
type ListType = "Grid" | "List";

const HomePage = () => {
 const {error,isLoading}=  useGetProducts() 
    const products = useSelector((state:RootState)=>state.products.value)
    const [listType,setListType]= useState<ListType>('Grid')
  return (
    <>
    <Stack.Screen  options={{ headerShown:false}}/>
    <StatusBar backgroundColor={'white'}/>

    <SafeAreaView style={style.container}>
<Header/>
{(!isLoading ) &&<ProductList error={error} data={products as Product[]} listType={listType}/>
}
<ActionButton listType={listType} setListType={setListType}/>

    </SafeAreaView>
    </>
  )
}
const ProductList = ({error,data,listType}:{error:Error|null,data:Product[],listType:ListType})=>{
    if(error){
Alert.alert(`Some error occured : ${error.message}`)
return (
<View>
    <Text>Nothing to show</Text>
</View>
)
}
if(data.length==0){
    return(
        <View>
        <Text>Nothing to show</Text>
    </View>      
    )
}

if(listType=='List'){
    return(
        <FlatList
        key={'_'}
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
            initialNumToRender={1} 
            maxToRenderPerBatch={1} 
            contentContainerStyle={{
             
                gap:calcWidth(5),
        
            }}
      
            updateCellsBatchingPeriod={100} 
            windowSize={7}
            />      
    )
}
return(
<FlatList
 key={'#'}
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

)
}
const ActionButton = ({ listType,setListType }: { listType: ListType, setListType:Function }) => {
   const handlePress = ()=>{
    setListType((prevListType:ListType)=>{
return (prevListType =='Grid')? 'List':'Grid'
    })
   }
    return (
      <Pressable style={style.actionButton} onPress={handlePress}>
        {listType == "Grid" ? (
          <Feather name="grid" size={22} color='white' />
        ) : (
          <Feather name="list" size={22} color='white' />
        )}
      </Pressable>
    );
  };
const style = StyleSheet.create({
list:{
flex:1,
    marginTop:calcHeight(5),
    paddingHorizontal:calcWidth(5),
},
listItem:{
   
},
container:{
flex:1,
backgroundColor:'white',
display:'flex',
flexDirection:'column',
},
actionButton:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    bottom:calcHeight(10),
    right:calcWidth(10),
    backgroundColor:PRIMARY_COLOR,
    padding:calcWidth(4.8),
    borderRadius:calcWidth(100)

  }
})
export default HomePage