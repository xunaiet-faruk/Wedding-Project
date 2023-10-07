import { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";
export const Authcontext = createContext(null)
const Context = ({ children }) => {
    const [user, setStay] = useState(null)
    const auth = getAuth(app);

    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currenuser => {
            setStay(currenuser)
            console.log('user login here', currenuser)
        })
        return () => {
            unsubscribe();
        }


    }, [])

    const Authemail = { createuser, signin, signOut, logout, user }

    return (

        <Authcontext.Provider value={Authemail}>

            {children}

        </Authcontext.Provider>
    );
};

export default Context;