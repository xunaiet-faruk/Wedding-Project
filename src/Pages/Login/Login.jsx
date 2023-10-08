import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Authcontext } from "../../Configcontext/Context";
import { FcGoogle } from 'react-icons/fc';
import Swal from "sweetalert2";
const Login = () => {
 
    const [passwrong, setpasswrong] = useState('')
    const { signin, Googlesign } = useContext(Authcontext);
    const location = useLocation();
    const navigate = useNavigate()

    const handlelogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value;
        const cheaked = e.target.cheaked.value;
        console.log(name, email, password, cheaked)

        signin(email, password)
            .then(res => {
                
                Swal.fire({
                    icon: 'success',
                    text: 'Successfully login!',
                 
                })


                console.log(res.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
                setpasswrong(error.message)
            })

    }

    const handlegoogle = () => {
        Googlesign()
            .then(() => {
                navigate(location?.state ? location.state : '/')


            })
            .catch(error => {
                console.log(error)
            })
    }

    return (


        <>

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
                                    <input type="checkbox" className="mr-3" name="cheaked" id="" />
                                    <label className="text-md" htmlFor="task">Please Accept our terms</label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center mt-2">If you are new please
                            <Link className="text-green-500" to='/register'> Register</Link>
                        </p>

                    

                        <p className="text-center">
                            {
                                passwrong && <span className=" text-red-400">{passwrong}</span>
                            }
                        </p>

                        <div className="text-center">
                            <button onClick={handlegoogle} className="btn boreder ml-3 text-md hover:bg-error mt-4 font-semibold">
                                <FcGoogle className="text-2xl ml-2"> </FcGoogle>   Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;