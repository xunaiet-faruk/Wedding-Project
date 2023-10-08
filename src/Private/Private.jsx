import { useContext } from "react";
import { Authcontext } from "../Configcontext/Context";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({children}) => {
    const loaction =useLocation();
    const {user,loading} =useContext(Authcontext);
    if(loading){
        return <div className="flex justify-center"><span className="loading loading-spinner loading-lg mt-28"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={loaction.pathname} to='/login'></Navigate>;
    
   
};

export default Private;