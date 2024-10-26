import state from "./state";

export interface User{
    phone_number:string,
    id:string,
    token:string,

}
export default interface UserState extends state{
    value:User
}