import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Configcontext/Context";
import Navbar from "../../Navbar/Navbar";
import { updateProfile } from "firebase/auth";



const Register = () => {
    const [error, seterror] = useState('')
    const [succes, setsuccess] = useState('');
    const { createuser } = useContext(Authcontext)
    const handlesubmit = e => {
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value;
        const cheaked = e.target.cheaked.value;
        console.log(name, email, password, cheaked)
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
        }
        createuser(email, password)
            .then(res => {
                setsuccess('Your successfully Registerd')
                updateProfile(res.user,{
                    displayName:name,
                    photoURL:image,

                })
                .then(()=>{
                    console.log('NIce')
                    
                })
                .catch(error =>{
                    console.log(error)
                })
                console.log(res.user)
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
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-[800px] p-5 shadow-2xl bg-gray-300">
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
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <div className="mt-3 mb-3">
                                    <input type="checkbox" className="mr-3 " name="cheaked" id="" />
                                    <label className="text-md" htmlFor="task">Please Accept our terms</label>
                                </div>
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
                        <p className="text-center mt-4">
                            {
                                succes && <span className="text-green-600 text-bold ">{succes}</span>
                            }
                        </p>
                        <p className="text-center mt-2">Already Have an account go to <Link className="text-green-500" to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Register;