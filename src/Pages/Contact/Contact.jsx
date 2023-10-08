import {MdLogout, MdSupervisorAccount } from 'react-icons/md';
import { GiSelfLove } from 'react-icons/gi';

const Contact = () => {
    return (
        <div>
            <div className='flex justify-evenly'>
                 <div className='mt-5 p-10'>
               
                    <p className='text-2xl border-2 px-32 py-3 round-t-md text-black flex gap-4'><MdSupervisorAccount className='text-3xl'></MdSupervisorAccount> Acoount</p>
                    <p className='text-2xl border-x-2 px-32 py-3 text-black flex gap-4'><GiSelfLove></GiSelfLove>Favorites</p>
                    <p className='text-2xl border-2 rounded-b-md px-32  py-3 mb-12 flex gap-4 text-black'><MdLogout></MdLogout> Logout</p>
                 </div>

                 <div className='p-10 mt-3'>
                            <h1 className='text-red-400 text-3xl'>User Information</h1>
                            <p>Email :</p>
                            <p>Name :</p>
                            <p>Verified :</p>
                            <p>Register :</p>
                 </div>
            </div>
        </div>
    );
};

export default Contact;