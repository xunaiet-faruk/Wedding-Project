// import { BiPhoneCall, BiSolidLocationPlus } from 'react-icons/bi';
// import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
    return (
    <>        
    
    <h1 className='text-3xl font-bold italic mt-5 text-center'>Contact All Us</h1>
    
       

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 text-center my-16 p-8 container mx-auto' data-aos="zoom-out-up" data-aos-duration="3000">
                <div className='bg-[#ABCE4E] p-20 rounded-lg space-y-4'>
                    <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                        <SlLocationPin></SlLocationPin>
                    </div>
                    <h1 className='text-3xl text-white font-semibold'>Location</h1>
                    <p className='text-white font-poppins'>Swamibagh Road No 28</p>
                    <p className='font-poppins text-white'>Dhaka - Bangladesh</p>
                </div>
                <div className='bg-[#F55D52] p-20 rounded-lg space-y-4'>
                    <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                        <FiPhoneCall></FiPhoneCall>
                    </div>
                    <h1 className='text-3xl text-white font-semibold'>Call Us</h1>
                    <p className='text-white font-poppins'>Phone : 01719991111</p>
                    <p className='font-poppins text-white'>Fax: +6221.2002.2013</p>
                </div>
                <div className='bg-[#5B9ACF] p-20 rounded-lg space-y-4'>
                    <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                        <HiOutlineMail></HiOutlineMail>
                    </div>
                    <h1 className='text-3xl text-white font-semibold'>Email Us</h1>
                    <p className='text-white font-poppins'>dreameve@gmail.com</p>
                    <p className='font-poppins text-white'>eventorganizer@gmail.com</p>
                </div>
            </div>
        

        </>

    );
};

export default Contact;