import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Configcontext/Context";
import Navbar from "../../Navbar/Navbar";


const Register = () => {
    const { createuser } = useContext(Authcontext)
const handlesubmit = e =>{
    const name =e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value;
    console.log(name,email,password)
    e.preventDefault()
    createuser(email, password)
        .then(res => {
            console.log(res.user)
        })
        .catch(error => {
            console.log(error)
        })

    
}


    return (
        <> 

        <Navbar></Navbar>
                <div className="hero min-h-screen ">
           
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[800px] p-5 shadow-2xl bg-gray-300">
                    <form onSubmit={handlesubmit}>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
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
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="task">Please cheaked</label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Register</button>
                        </div>
                    </form>
                    <p className="text-center">Already Have an account go to <Link className="text-green-500" to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
        </>

    );
};

export default Register;