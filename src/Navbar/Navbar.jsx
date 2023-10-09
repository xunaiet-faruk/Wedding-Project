import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../Configcontext/Context";



const Navbar = () => {
    const { user, logout } = useContext(Authcontext)

const handleclick = () =>{
    logout()
    .then(() =>{
        console.log('user succecfully')
    })
    .catch(error =>{
        console.log(error)
    })
}


    const links = <div className="flex   gap-6 items-center">

     
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-lg text-white font-medium bg-black py-2 px-4 lg:px-6 rounded-lg" : "text-xl "
                }
            >
                Home
            </NavLink>
    

       
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-lg text-white font-medium bg-black py-2 px-4 lg:px-6 rounded-lg" : "text-xl"
                }
            >
                Contact
            </NavLink>
      
      
     
           {user && <NavLink
                to="/speacial"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-lg text-white font-medium bg-black py-2 px-4 lg:px-6 rounded-lg" : "text-xl "
                }
            >
                Special
            </NavLink> }
      
      
           {user && <NavLink
                to="/procedure"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-lg text-white font-medium bg-black py-2 px-4 lg:px-6 rounded-lg" : "text-xl "
                }
            >
                Procedure
            </NavLink>}
      
      
       
            {!user && <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-lg text-white font-medium bg-black py-2 px-4 lg:px-6 rounded-lg" : "text-xl "
                }
            >
                Register
            </NavLink>}
       
      
       

    </div>



    return (
        <div className="navbar  pt-5 ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52">
                        {links}
                    </ul>
                </div>
                <img className="w-[100px] ml-16 " src={"https://i.ibb.co/pxx4t7p/257710628-3080374558951991-1582989214067123809-n.png"} alt="" />

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex-col lg:flex-row md:flex-row md:gap-0 lg:gap-0 gap-3">

                {
                    user && <p className="mr-2">{user.displayName}</p>
                }
                {

                    user ?
                       
                          
                            <button onClick={handleclick} className="btn bg-blue-200 font-bold px-8">Sign out</button>
                     

                        :

                        <Link to='/login'>
                        <button className="btn ml-5 bg-blue-200 font-bold px-8">Login</button>
                        </Link>


                }
                {
                    user && <img className="w-12 ml-5  rounded-full h-12" src={user.photoURL}></img>
                }
              
            </div>
        </div>
    );
};

export default Navbar;