
import { FiPhoneCall } from 'react-icons/fi';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
    return (
    <>        
    
            <section>


                <div className='grid grid-cols-1   lg:grid-cols-3 gap-6 text-center my-16 p-8 container mx-auto' data-aos="flip-left">
                    <div className=' p-20 rounded-lg bg-pink-100  space-y-4'>
                        <div className=' p-3  rounded-full w-[40px] mx-auto'>
                            <SlLocationPin></SlLocationPin>
                        </div>
                        <h1 className='text-3xl text-black font-semibold'>Location</h1>
                        <p className='text-black font-poppins'>Swamibagh Road No 28</p>
                        <p className='font-poppins text-black'>Dhaka - Bangladesh</p>
                    </div>
                    <div className='b p-20 bg-gray-100 rounded-lg space-y-4'>
                        <div className=' p-3 rounded-full w-[40px] mx-auto'>
                            <FiPhoneCall></FiPhoneCall>
                        </div>
                        <h1 className='text-3xl text-black font-semibold'>Call Us</h1>
                        <p className='text-black font-poppins'>Phone : 01719991111</p>
                        <p className='font-poppins text-black'>Fax: +6221.2002.2013</p>
                    </div>
                    <div className=' p-20 bg-pink-200 rounded-lg space-y-4'>
                        <div className=' p-3 rounded-full w-[40px] mx-auto'>
                            <HiOutlineMail></HiOutlineMail>
                        </div>
                        <h1 className='text-3xl text-black font-semibold'>Email Us</h1>
                        <p className='text-black font-poppins'>Xunaiet@gmail.com</p>
                        <p className='font-poppins text-black'>eventorganizer@gmail.com</p>
                    </div>
                </div>


                <div className="mx-auto  max-w-screen-xl pl-8 lg:ml-[520px] px-4  py-16 sm:px-7 lg:px-8" data-aos="flip-left">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="rounded-lg flex bg-gray-100  p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="" className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div>
                                        <input
                                            className="peer sr-only"
                                            id="option1"
                                            type="radio"
                                            tabIndex="-1"
                                            name="option"
                                        />

                                        <label
                                            htmlFor="option1"
                                            className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                            tabIndex="0"
                                        >
                                            <span className="text-sm"> Option 1 </span>
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            className="peer sr-only"
                                            id="option2"
                                            type="radio"
                                            tabIndex="-1"
                                            name="option"
                                        />

                                        <label
                                            htmlFor="option2"
                                            className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                            tabIndex="0"
                                        >
                                            <span className="text-sm"> Option 2 </span>
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            className="peer sr-only"
                                            id="option3"
                                            type="radio"
                                            tabIndex="-1"
                                            name="option"
                                        />

                                        <label
                                            htmlFor="option3"
                                            className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                                            tabIndex="0"
                                        >
                                            <span className="text-sm"> Option 3 </span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Send Enquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        

        </>

    );
};

export default Contact;