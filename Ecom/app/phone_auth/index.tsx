import { StatusBar,StyleSheet,View, Text, Alert, ActivityIndicator, Modal, Pressable, Platform } from 'react-native'

import React, { useEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextBlack from '../comman/TextBlack'
import { calcHeight, calcTextSize } from '../../utility/res'
import { HorizontalPaddingDimension, TopPaddingDimension } from '../comman/dimension'
import TextInputWithLabelAndIcon from './(component)/TextInputWithLabelAndIcon'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import PrimaryButton from '../component/PrimaryButton';
import Expanded from '../component/Expanded';
import { useHandlePhoneNumberPost,useHandleVerifyOtp } from '../../api/phone_auth/auth';
import validatePhoneNumber from '../../utility/validatePhoneNumber';
import { useDispatch } from 'react-redux';
import { setUser } from '../../feature/user/userSlice';
const PhoneIcon = <FontAwesome name="phone" size={24} color="black" />
const OTPIcon = <AntDesign name="lock" size={24} color="black" />
const PhoneAuth = () => {
  const [phoneNumber,setPhoneNumber] = useState<string|null>()
  const [phoneNumberError,setPhoneNumberError] = useState<boolean>(false)
  const [otp,setOtp] = useState<string|null>()
  const handlePhoneNumberPost = useHandlePhoneNumberPost()
  const handleVerifyOtp = useHandleVerifyOtp()
const dispatch = useDispatch()
useEffect(()=>{
if(handleVerifyOtp.error){
  Alert.alert("Please enter the correct otp")
}
if(handleVerifyOtp.isSuccess){
  const {id,token} = handleVerifyOtp.data
  console.log(id,token)
  dispatch(setUser({
    phone_number:phoneNumber!,
    token:token,
    id:id
  }))
  router.replace('../home_page')
}
},[handleVerifyOtp.isError,handleVerifyOtp.isSuccess])
const handleSubmit = ()=>{
   if(handlePhoneNumberPost.isSuccess){
      handleVerifyOtp.mutate({otp:otp!,phone_number:phoneNumber!})
    return
    }
if(!validatePhoneNumber(""+phoneNumber)){
setPhoneNumberError(true)
return     
}
setPhoneNumberError(false)

handlePhoneNumberPost.mutate({phone_number:phoneNumber!})

  
}  
return (
    <>
           <Stack.Screen
        options={{
            headerShown:false,
        }}
        />
    <SafeAreaView style={style.container}>
     <TextBlack text='Welcome !' style={style.title}/>
    <TextInputWithLabelAndIcon icon={PhoneIcon} label='Phone'   maxLength={10} error={phoneNumberError} onChangeText={(value)=>setPhoneNumber(value)} keyboardType="numeric"/>
{ (handlePhoneNumberPost.isSuccess) && <TextInputWithLabelAndIcon icon={OTPIcon} label='OTP' error={false} keyboardType="numeric" onChangeText={(value:string)=>setOtp(value)}/>}
<Expanded/>
<PrimaryButton text='Submit' onPress={handleSubmit} style={style.submitButton}/>

    


    </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create({
  container:{
paddingHorizontal:HorizontalPaddingDimension,
flex:1,
paddingTop:TopPaddingDimension,
gap:calcHeight(5),
paddingBottom:(Platform.OS=='android')? StatusBar.currentHeight:0
  },
  title:{
    fontSize:calcTextSize(8),
  },
  submitButton:{
    height:calcHeight(7),
   
  }
})
export default PhoneAuth