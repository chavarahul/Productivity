export interface LoginData{
    email:string,
    password:string,
    phone?:string
   }
   
   export interface button {
       BtnName:String,
       type?:'submit'|'button',
   }
export interface Tech{
    name:string
}
export interface NavItems{
    name:string,
    link:string
  }