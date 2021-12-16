const AuthReducer = (state,action)=>{
    switch(action.type){
        case "start":
            return{
                user:null,
                fetching:true,
                error:null
            };
        case "success":
            return {
                user:action.payload,
                fetching:false,
                error:null

        };
        case "failed":
            return{
                user:null,
                fetching:false,
                error:action.payload
            };
            default:
                return  state
                
        
    }

}

export default AuthReducer