import { useDispatch } from "react-redux"
import { Product } from "../../app/type/products"
import request from "../request"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { setError, setLoading, setProducts } from "../../feature/products/productsSlice"

const useGetProductsSearch =(searchText:string,setData:Function)=>{
   
    const {data,isLoading,error,refetch} = useQuery<Product[]>(
        {
            queryKey:['searchProducts'],
            queryFn:()=>fetchProducts(searchText),     
            enabled: false
        },   
    )
   useEffect(()=>{ 
    if(isLoading){
    }
if(error!==null){
    
   
}
if(data){

   setData(data)
}
},[data,isLoading,error])

  return {refetch}
}
const fetchProducts = async (searchText:string)=>{

    return request.get<Product[]>(`${process.env.EXPO_PUBLIC_BASE_URL}/products`,{
        params:{
            search:searchText
        }
    }).then(res=>res.data)
  }
  export default useGetProductsSearch
