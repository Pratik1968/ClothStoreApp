import state from "./state"

export interface ProductsState extends state{
value:Product[]
}
export interface Product{
    id:string,
    imageUrl:string,
    brand:string,
    description:string,
    size:string[],
    price:string,
    title:string
}