import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

const links =<>

  <li>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active text-xl" : " "
            }
        >
            Home
        </NavLink>
  </li>
  <li>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "text-xl "
            }
        >
          About
        </NavLink>
  </li>
  <li>
        <NavLink
            to="/service"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "text-xl"
            }
        >
          Contact
        </NavLink>
  </li>
  <li>
        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "text-xl"
            }
        >
       Services
        </NavLink>
  </li>


</>

    return (
        <div className="navbar bg-base-100 bg-gray-100 pt-5 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {links}
                    </ul>
                </div>
                <img className="w-[100px]" src={"https://i.ibb.co/pxx4t7p/257710628-3080374558951991-1582989214067123809-n.png"} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {links}
                </ul>
            </div>
            <div className="navbar-end">
               <Link to='/login'>
               
                    <button className="btn bg-blue-200 font-bold px-8">Login</button>
               </Link>
            </div>
        </div>
    );
};

export default Navbar;