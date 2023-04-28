
import React, { useEffect, useState } from 'react'


export default function LoginForm() {
    const [data,setData]=useState(null)
    const [formData,setFormData]=useState({
         Email:"",
         paswword:""
    })
    let [password,setPassWord]=useState("")
    const [filteredData,setFilteredData]=useState()
    useEffect(()=>{
       fetch("https://gorest.co.in/public/v2/users")
       .then(res=>res.json())
       .then(data=>setData(data))  
    },[])
    function changeHandler(event){
        setFormData((prev)=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
        
    }
 const checkhandler=()=>{
    
    let filtered=data.filter((item)=>item.email===formData.Email)
    setFilteredData(filtered)
    console.log(filtered)
    let token=Math.random().toString(36).substr(2)
    console.log(token)
    setPassWord(token)
 }
  return (
    <div>
        <form>
             <input type="text" value={formData.Email} name="Email" onChange={changeHandler} />
             {filteredData && <input type="password" value={formData.paswword} name="password" onChange={changeHandler} />}
             <button  type="button" onClick={checkhandler}>submit</button>
        </form>
    </div>
  )
}
