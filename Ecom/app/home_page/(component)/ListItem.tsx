import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Product } from '../../type/products'
import { calcHeight, calcTextSize, calcWidth } from '../../../utility/res'
import { GRAY_200_COLOR, GRAY_300_COLOR } from '../../comman/color'
import TextBold from '../../comman/TextBlack'
import TextRegular from '../../comman/TextRegular'
import { router } from 'expo-router'

const ListItem = ({data}:{data:Product}) => {
 
    const handlePress =()=>{
router.push({pathname:'../product_page',params:{id:data.id}})
 }
    return (
    <Pressable onPress={handlePress}>
        <View style={style.container}>
   <ImageContainer imageUrl={data.imageUrl}/>
<InfoContainer title={data.title} price={data.price} />
        </View>
    </Pressable>
  )
}
const InfoContainer = ({title,price}:{title:string,price:string})=>{
    return(
        <View style={style.infoContainer}>
               <TextRegular text={title}  style={style.titleText} />
               <TextRegular text={price+' USD'} style={style.priceText}/>       
        </View>
    )
}
const ImageContainer = ({imageUrl}:{imageUrl:string})=>{
    return(
        <View style={style.imageContainer}>
         <Image
            style={{
                width:100,
                height:100,
            }}
            source={
                {
                    uri:`${process.env.EXPO_PUBLIC_BASE_URL}/images/${imageUrl}`
                }
            }
            />
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        borderRadius:calcWidth(5),
        backgroundColor:GRAY_200_COLOR,
paddingHorizontal:calcWidth(10),
width:calcWidth(90),
height:calcHeight(20),
       display:'flex',
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
gap:calcWidth(5)
    },
    imageContainer:{
        
        height:'80%',
display:'flex',
alignItems:'center',
justifyContent:'center',

    },
    infoContainer:{
        flex:1,
        
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
    },
    priceText:{
color:GRAY_300_COLOR,
fontSize:calcTextSize(3.7)
    },
    titleText:{

    }
})
export default ListItem