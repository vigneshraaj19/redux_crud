import axios from "axios"
import { MAKE_REQUEST ,FAIL_REQUEST, GET_USER_LIST,DELETE_USER, ADD_USER, UPDATE_USER,USER_OBJ} from "./Actiontype"
import { toast } from "react-toastify"

export const makeRequest=()=>{

    return{
      type: MAKE_REQUEST
    }
}

export const failRequest=(err)=>{

    return{
        type: FAIL_REQUEST,
        payload:err
    }
            
}
export const getUserList=(data)=>{

    return{
        type: GET_USER_LIST,
        payload:data
    }    
}

export const DeleteUser=()=>{

    return{
      type: DELETE_USER
    }
}
export const AddUser=()=>{

    return{
      type: ADD_USER
    }
}
export const UpdateUser=()=>{

    return{
      type: UPDATE_USER
    }
}

export const getUserObj=(data)=>{

    return{
        type: USER_OBJ,
        payload:data
    }    
}


export const FetchUserList=()=>{
    return (dispatch)=>{
        dispatch(makeRequest());
            axios.get('http://localhost:9000/api/user').then(res=>{
                const userlist=res.data;
                dispatch(getUserList(userlist))
            }).catch(err=>{
                dispatch(failRequest(err.message))
            })      
    }
}

export const Removeuser=(code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());     
            axios.delete(`http://localhost:9000/api/delete/${code}`).then(res=>{
                dispatch(DeleteUser())
                toast.success("User Removed Successfully")
            }).catch(err=>{
                dispatch(failRequest(err.message))
            })  
    }
}

export const FunctionAddUser=(data)=>{
    return (dispatch)=>{
        dispatch(makeRequest());      
            axios.post('http://localhost:9000/api/user/add',data).then(res=>{
                dispatch(AddUser())
                toast.success("User Added Successfully")
            }).catch(err=>{
                dispatch(failRequest(err.message))
            })           
    }
}

export const FunctionUpdateUser=(data,code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.put(`http://localhost:9000/api/update`,data).then(res=>{
            dispatch(UpdateUser());
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
    }
}
export const FetchUserObj=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.get(`http://localhost:9000/api/updatedata/${code}`).then(res=>{
            const userlist=res.data;
            dispatch(getUserObj(userlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
    }
}
