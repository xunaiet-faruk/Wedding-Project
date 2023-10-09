

const Speacial = () => {
    return (
        <div>
            <div className='text-center' data-aos="flip-left" data-aos-duration="3000">
                <h1 className='text-5xl mb-8 text-center mt-8 font-semibold italic text-pink-400'>Cutting Costs, Never <span className='text-black'>Cuality</span></h1>
                <p className='text-2xl hover:text-black font-semibold text-gray-400 italic text-center'>Looking for the perfect wedding offer? Well we have some fantastic wedding offers just for <br />  you.From complimentary bedrooms to <span className='text-red-500 font-bold'>50%</span> off additional evening guests to really get the <br />  party started! With a range of offers for weddings,  take a peek below and contact our award <br />-winning team to discuss the right wedding offer for you.</p>

            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 md:ml-32 lg:ml-24 my-10  gap-12 max-w-7xl mx-auto'>

                <div className='' data-aos="fade-up" data-aos-duration="1000">
                    <div className="hero min-h-screen ml-3 w-[400px] lg:w-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/d5GBMjK/crr1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-white italic font-bold">Chirstmas 2023 offers</h1>
                                <p className="mb-5 text-1xl">Save $300 when you Chismas 2023 wedding <br /> at Manor By the Lake. Last remaining dates -Saturday 23rd December 2023 or Friday 29th December 2023.*New booking only T &C's Apply</p>
                                <a className='  text-white hover:text-green-500'>Find Out More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='' data-aos="fade-up" data-aos-duration="1000"

                >
                    <div className="hero min-h-screen ml-3 w-[400px] lg:w-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/Jkg3q80/be1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl italic text-white font-bold">January 2024 offers</h1>
                                <p className="mb-5 text-1xl">Save over $2,500 with complimentary bedrooms for the <br />remainig january 2024 dates *New bookings only , T & C apply </p>
                                <a className='  text-white hover:text-green-500'>Find Out More</a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='' data-aos="fade-up" data-aos-duration="1000"
>
                    <div className="hero min-h-screen ml-3 w-[400px] lg:w-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/ZdB8yYD/cp2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-whiter italic text-5xl font-bold">Fevruary 2024 offers</h1>
                                <p className="mb-5 text-1xl">Save $1,90 with 6 bedroom complimentary & 50% off <br /> additional evening guests to really get the party started ! <br /> * New booking only T & C apply</p>
                                <a className='  text-white hover:text-green-500'>Find Out More</a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='' data-aos="fade-up" data-aos-duration="1000">
                    <div className="hero min-h-screen ml-3 w-[400px] lg:w-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/VwTd8Pj/ki.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">March 2024 Offers </h1>
                                <p className="mb-5 text-1xl">Save over $1,230 ! Book your March 2024 wedding for 60 adult day guest , for the price of 50, includes complimentary <br /> spring decoration for remaining March 2024 dates , * New booking only T & C apply.</p>
                                <a className='  text-white hover:text-green-500'>Find Out More</a>

                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <h1 className='text-center text-4xl font-bold italic mt-5'>For Bokking</h1>

            <div className=' lg:w-[600px] w-[400px] mx-auto ' data-aos="fade-up" data-aos-duration="1000">

                <form className='flex flex-col'>



                    <input className='px-5 py-2 mb-2 rounded bg-[#F4F4F4]' type="date" placeholder='date' name="" id="" />
                    <input className='px-5 mb-2  py-2  rounded bg-[#F4F4F4]' type="name" placeholder='name' name="" id="" />
                    <input className='px-5 mb-2  py-2  rounded bg-[#F4F4F4]' type="email" placeholder='email' name="" id="" />
                    <input className='px-5 mb-2  py-2  rounded bg-[#F4F4F4]' type="text" placeholder='number' name="" id="" />
                    <textarea name="" className='px-5 py-2 w-1/2 rounded bg-[#F4F4F4]' placeholder='Textarea' id="" cols="35" rows="6"></textarea>
                    <input type="submit" className='bg-pink-50 mt-3 mb-20  py-2 w-1/4 rounded-md text-black  font-medium text-2xl font-amatic' value="Submit"></input>


                </form>
            </div>


        </div>
    );
};

export default Speacial;