import { useContext } from "react";
import { Authcontext } from "../Configcontext/Context";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({children}) => {
    const loaction =useLocation();
    const {user} =useContext(Authcontext);
    if(user){
        return children;
    }
    return <Navigate state={loaction.pathname} to='/login'></Navigate>;
    
   
};

export default Private;