
import { MAKE_REQUEST ,FAIL_REQUEST, GET_USER_LIST,DELETE_USER,ADD_USER, UPDATE_USER, USER_OBJ} from "./Actiontype"

const initialstate={
    loading:true,
    data:[],
    error:'',
    userobj: {}
}   
export const Reducer=(state=initialstate,action)=>{
    switch(action.type){
        case MAKE_REQUEST:return{
            ...state,
        }
        case GET_USER_LIST:return{
            loading:false,
            data:action.payload,
            error:''
        }
        case FAIL_REQUEST:return{
            loading:false,
            data:[],
            error:action.payload
        }
        case DELETE_USER:return{
            ...state,
            loading:false,          
        }
        case ADD_USER:return{
            ...state,
            loading:false,          
        }
        case UPDATE_USER:return{
            ...state,
            loading:false,          
        }
        case USER_OBJ:return{
            ...state,
            loading:false,   
            userobj:action.payload       
        }
        default: return state
    }
}

