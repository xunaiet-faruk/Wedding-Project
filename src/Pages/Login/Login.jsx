import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useContext } from "react";
import { Authcontext } from "../../Configcontext/Context";

const Login = () => {

const {signin} =useContext(Authcontext);
const location =useLocation();
const navigate =useNavigate()

const handlelogin = e =>{
    e.preventDefault()
    const email =e.target.email.value
    const password =e.target.password.value;
    signin(email,password)
    .then(res =>{
        console.log(res.user)
        navigate(location ? location?.state : '/')
    })
    .catch(error =>{
        console.log(error)
    })
  
}

    return (


        <>
         <Navbar></Navbar>
        <div className="hero min-h-screen ">
           
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[800px] p-5 shadow-2xl bg-blue-100">
                    <form onSubmit={handlelogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                         <div className="mt-5">
                            <input type="checkbox" name="cheaked" id="" />
                            <label htmlFor="task">Please cheaked</label>
                         </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center">please Register Please go to
                        <Link className="text-green-500" to='/register'> Register</Link>
                    </p>
                </div>
            </div>
        </div>
        </>

    );
};

export default Login;