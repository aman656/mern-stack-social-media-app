import axios from "axios";


export const loggingIn= async  (info,dispatch)=>{
    dispatch({type:'start'})
    try{
        const res = await axios.post('/auth/login',info)
        dispatch({type:"success",payload:res.data})


    }catch(err){
        dispatch({type:"error",payload:err})

    }

}