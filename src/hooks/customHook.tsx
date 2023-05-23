import React from 'react'
import axios from 'axios'
interface MyObject {
    _id:number,
    EmpName:string,
    EmpAge:number,
    EmpEmail:string,
    EmpMobile:number,
    EmpGender:string,
    EmpPassword:string

  }
const CustomHook = (url:string) => {
    const [data,setData]=React.useState<MyObject[]>([]);
    const [errorValue,setError]=React.useState<unknown>();
    const getDataFromUrl =async ()=>{
        try{
            const response=await axios.get(url)
            setData(response.data);
            console.log("coustom hook call",response)
        }catch(err){
            setError(err);
        }
       console.log("use effect")
    }
    React.useEffect( ()=>{
        getDataFromUrl()
    },[url])
return {data,errorValue,getDataFromUrl}
}

export default CustomHook
