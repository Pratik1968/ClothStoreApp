import {  useMutation, useQuery } from "@tanstack/react-query"
import request from "../request"
import {  OtpVerifcationRequest, PhoneAuthRequest, PhoneAuthResponse } from "../../app/type/auth"
import { useEffect } from "react"
import Response from "../../app/type/response"
const  handlePostOtpRequest =async (data:OtpVerifcationRequest)=>{
    return request.post<Response>(`${process.env.EXPO_PUBLIC_BASE_URL}/user/otp`,data).then(res=>res.data)
    }
    const handlePostPhoneNumberRequest = async (data:PhoneAuthRequest)=>{
    return request.post<PhoneAuthRequest>(`${process.env.EXPO_PUBLIC_BASE_URL}/user`,data).then(res=>res.data)
    }
export const useHandlePhoneNumberPost=()=>useMutation({
    mutationFn:handlePostPhoneNumberRequest
})
export const useHandleVerifyOtp=() =>useMutation({
        mutationFn:handlePostOtpRequest
    })
