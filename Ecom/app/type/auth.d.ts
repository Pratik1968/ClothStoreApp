export interface PhoneAuthRequest{
    phone_number:string,
}
export interface OtpVerifcationRequest{
    otp:string,
    phone_number:string,

}

export interface PhoneAuthResponse{
    otp:string
}
export interface AuthResponse{
    phone_number:string,
    token:string,
    id:string
}