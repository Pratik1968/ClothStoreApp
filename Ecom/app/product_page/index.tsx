import { View, Text, StyleSheet, ActivityIndicator, Image, Pressable, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import useGetOneProduct from '../../api/products/getOneProducts'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Product } from '../type/products'
import TextRegular from '../comman/TextRegular'
import TextBold from '../comman/TextBlack'
import { GRAY_100_COLOR, GRAY_200_COLOR, GRAY_300_COLOR } from '../comman/color'
import Ionicons from '@expo/vector-icons/Ionicons';
import PrimaryButton from '../component/PrimaryButton'
import { useDispatch } from 'react-redux'
import { pushProducts } from '../../feature/carts/cartsSlice'
import { calcHeight, calcTextSize, calcWidth } from '../../utility/res'
import { HorizontalPaddingDimension } from '../comman/dimension'
const ProductPage = () => {
  const {id} = useLocalSearchParams()
  const {data,isLoading,error} = useGetOneProduct(id as string)
  const dispatch = useDispatch()
  if(isLoading){
    return (
        <SafeAreaView style={style.containerFullSize}>
            <ActivityIndicator />
        </SafeAreaView>
    )
  } 
  if(error && !isLoading){
    return (
        <SafeAreaView style={style.containerFullSize}>
<Text>Something went wrong</Text>
        </SafeAreaView>
    )
  } 
  return (
        <>
        <Stack.Screen
        options={{
            headerShown:false
        }}
        />
                <StatusBar backgroundColor={GRAY_200_COLOR}/>

    <SafeAreaView style={style.container}>
    <Ionicons name="arrow-back" size={24} color="black" onPress={()=>router.back()} />
<ImageContainer imageUrl={data!.imageUrl}/>
<InfoContainer data={data!}/>
<PrimaryButton text='Add to Cart'onPress={()=>dispatch(pushProducts(data!))} style={style.cartButton}/>
    </SafeAreaView>
    </>
  )
}
const ImageContainer = ({imageUrl}:{imageUrl:string})=>{
    return(
        <View style={style.imageContainer}>
                 <Image
        style={style.image}
        source={{
            uri:`${process.env.EXPO_PUBLIC_BASE_URL}/images/${imageUrl}`

        }}
        />   
        </View>
    )
}
const InfoContainer = ({data}:{data:Product})=>{
    
    const TitleAndPrice = ()=>{
        return(
            <View style={style.titleAndPriceContainer}>
<TextBold text={data.title} style={style.title} />
<TextBold text={data.price} style={style.priceText}/>
</View>
        )
    }
    const Description = ()=>{
        return(
            <View>
                <TextBold text='DESCRIPTION' style={style.descriptionLabel}/>
                <TextRegular text={data?.description} style={style.descriptionText}/>

            </View>
        )
    }
    return(
        <View style={style.infoContainer}>
            <TextRegular text={data.brand} style={style.brandText}/>
            <TitleAndPrice/>
            <Description/>
<SizeSelector sizes={data.size}/>
        </View>
    )
}
const SizeSelector = ({sizes}:{sizes:string[]})=>{
const Size = ({size}:{size:string})=> <View ><Text>{size}</Text></View>
const [selectSize,setSelectSize] =useState(0)    
return(
    <>
    <TextBold text='SELECT SIZE' style={style.selectSizeLabel}/>
    <View style={style.sizesContainer}>
        {sizes.map((size,index)=>{
            return(
                <Pressable onPress={()=>setSelectSize(index)} style={[{backgroundColor:(index===selectSize)?GRAY_100_COLOR:'white'},style.sizeContainer]}>
                    <Size size={size}/>
                </Pressable>
            )
        })}
    </View>
    </>
)
}
const style = StyleSheet.create({
    containerFullSize:{
width:'100%',
height:'100%'
    },
    container:{
        flex:1,
        backgroundColor:GRAY_200_COLOR,
        paddingHorizontal:HorizontalPaddingDimension
    },
    infoContainer:{
height:calcHeight(70),
backgroundColor:'white',
marginHorizontal:-HorizontalPaddingDimension,
borderRadius:calcWidth(10),
display:'flex',
paddingTop:calcHeight(5),
paddingHorizontal:HorizontalPaddingDimension,
gap:calcHeight(1)
    },
    imageContainer:{
height:calcHeight(30),
width:calcWidth(100),
display:'flex',
alignItems:'center',
justifyContent:'center',

    },
    image:{
width:calcWidth(50),
height:calcWidth(50)
    },
    titleAndPriceContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    descriptionLabel:{
        fontSize:calcTextSize(3),

    },
    descriptionText:{
        color:GRAY_300_COLOR,
        fontSize:calcTextSize(3),
     
        textAlign:'justify'
    },
    title:{
fontSize:calcTextSize(5),
    },
    brandText:{
marginBottom:-calcHeight(1),
fontSize:calcTextSize(3)
    },
    sizesContainer:{
display:'flex',
flexDirection:'row',
    },
sizeContainer:{
    padding:calcWidth(3),
    borderRadius:calcWidth(3),
},
selectSizeLabel:{
    fontSize:calcTextSize(3),

},
cartButton:{
    position:'absolute',
    bottom:calcHeight(5),
    right:calcWidth(5),
    left:calcWidth(5),
    height:calcHeight(7)
},
priceText:{
    fontSize:calcTextSize(5)
}
})
export default ProductPage