import { useDispatch } from "react-redux"
import { Product } from "../../app/type/products"
import request from "../request"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { setError, setLoading, setProducts } from "../../feature/products/productsSlice"

const useGetProducts=()=>{
    const dispatch = useDispatch()
    const {data,isLoading,error} = useQuery<Product[]>(
        {
            queryKey:['products'],
            queryFn:fetchProducts,     
        },   
    )
   useEffect(()=>{ 
    if(isLoading){
       dispatch(setLoading(true))
    }
if(error!==null){
    
   dispatch(setError(error))
   dispatch(setLoading(false))

}
if(data){
   dispatch(setProducts(data as unknown as Product[]))
    dispatch(setLoading(false))

}
},[data,isLoading,error])
return {error,isLoading}
  
}
const fetchProducts = async ()=>{

    return request.get<Product[]>(`${process.env.EXPO_PUBLIC_BASE_URL}/products`).then(res=>res.data)
  }
  export default useGetProducts