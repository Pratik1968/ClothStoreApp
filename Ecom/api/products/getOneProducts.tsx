import { useDispatch } from "react-redux"
import { Product } from "../../app/type/products"
import request from "../request"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { setError, setLoading, setProducts } from "../../feature/products/productsSlice"

const useGetOneProduct=(id:string)=>{
    const {data,isLoading,error} = useQuery<Product>(
        {
            queryKey:['product'],
            queryFn:()=>fetchProduct(id),     
        },   
    )
    console.log(isLoading)
return {data,isLoading,error}
  
}
const fetchProduct = async (id:string)=>{
    return request.get<Product>(`${process.env.EXPO_PUBLIC_BASE_URL}/products/${id}`).then(res=>res.data)
  }
  export default useGetOneProduct