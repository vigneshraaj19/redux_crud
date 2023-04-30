import React, { useEffect } from "react";
import { FetchUserList, Removeuser } from "../Redux/Action";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Userlisting=()=>{
    
    const data=useSelector((state)=>state.user)
  
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(FetchUserList())   
    },[])
    
    const handledelete=(code)=>{
        if(window.confirm("Do you want to delete"))
        {
            dispatch(Removeuser(code))
            dispatch(FetchUserList())        
        }
    }

    return(
        data.loading?<div><h2>Loading</h2></div>:
        data.error?<div><h2>{data.error}</h2></div>:
        <div className="card">
            <div className="card-header">
            <Link to={'/user/add'} className="btn btn-success">Add User</Link>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Role</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.data && data.data.map((item)=>
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.role}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>                                     
                                        <Link to={'/user/edit/'+item._id} className="btn btn-primary">Edit</Link>
                                        <button onClick={()=>handledelete(item._id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>            
        </div>
    );
}



export default Userlisting;