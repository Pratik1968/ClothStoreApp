import { Dimensions, Platform } from "react-native"
const {width,height } = Dimensions.get('window')
export  const calcHeight=(x:number)=>{
    return (height*(x/100))
}
export const calcWidth = (x:number)=>{
    return (width*(x/100))
}
export const calcTextSize = (x:number)=>{
    const value = (width<height)? width:height
    return (value*(x/100))
}