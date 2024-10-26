const validatePhoneNumber = (phoneNumber:string) => {
    const regex = /^[+]*[0-9]{10,15}$/;  
    return regex.test(phoneNumber);
  };
  export default validatePhoneNumber