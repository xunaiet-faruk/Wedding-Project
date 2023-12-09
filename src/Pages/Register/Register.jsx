import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Configcontext/Context";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";



const Register = () => {
    const [error, seterror] = useState('')
    const [see, setsee] = useState(false);
    const { createuser, Googlesign } = useContext(Authcontext)
    const navigate = useNavigate()
    const handlesubmit = e => {
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value;
        
        console.log(name, email, password)
        e.preventDefault()
        seterror('')
        if (password.length < 6) {
            seterror('At least 6 carecter must be added');
            return;

        } else if (!/[A-Z]/.test(password)) {
            seterror('password must be 1 letter uppercase')
            return;

        } else if (!/[!@#$%^&*]/.test(password)) {
             seterror('password must be 1 caracter speacial')
             return;
        }
        createuser(email, password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: image,

                })
                    .then(() => {
                        window.location.reload()
                        Swal.fire({
                            icon: 'success',
                            text: 'Successfully login!'
                        })
                            .catch(error => {
                                console.log(error)
                            })
                })
                
                console.log(res.user)
            })
            .catch(error => {
                console.log(error)
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

          
            <div className="hero min-h-screen " >

                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-[380px] lg:w-[800px] p-5 shadow-2xl bg-gray-300">
                        <form onSubmit={handlesubmit}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Image</span>
                                </label>
                                <input type="text" placeholder="Photo" name="image" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type={see ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                                <h5 className="absolute left-[330px] lg:left-[760px]  mt-14" onClick={() => setsee(!see)}>{see ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</h5>

                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-secondary">Register</button>
                            </div>
                        </form>
                        <div>
                            {
                                error && <p className="text-red-400 font-bold text-center mt-4">{error}</p>
                            }
                        </div>
                        <div>
                            {
                                error && <p>{error.message}</p>
                            }
                        </div>
                      

                        <div className="text-center">
                            <button onClick={handlegoogle} className="btn boreder ml-3 text-md hover:bg-error mt-4 font-semibold">
                                <FcGoogle className="text-2xl ml-2"> </FcGoogle>   Google
                            </button>
                        </div>
                        <p className="text-center mt-2">Already Have an account go to <Link className="text-green-500" to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Register;