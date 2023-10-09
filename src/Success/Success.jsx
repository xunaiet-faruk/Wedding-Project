

const Success = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <h1 className='text-center text-4xl lg:text-5xl  mt-8 mb-16  font-bold italic text-black'>Matrimony Service with <span className="text-red-400">Millions of Success</span> Stories</h1>
            <div className="mb-16">

                <div className="carousel w-full" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div id="slide1" className="carousel-item relative w-full flex flex-col lg:flex-row gap-32 justify-center  items-center">

                        <div className='bg-gray-100 shadow-xl   p-8 rounded-lg '>
                            <img className='rounded-md ' src={'https://i.ibb.co/7GwVrMh/c1.jpg'} alt="" />
                            <h1 className='text-3xl mt-4'>Heena & Chause</h1>
                            <p className='mb-10'>We had initially sent requests to each other,
                                and Heena <br /> declined my request because her bucket list already had <br /> many people. However, unknowingly, she rejected it, and <br /> that's  how our slow communication began.....</p>
                        </div>
                        <div className='bg-gray-100 shadow-xl   p-8 rounded-md'>
                            <img className='rounded-md w-[410px] ml-3' src={'https://i.ibb.co/MfLjPR7/m2.png'} alt="" />
                            <h1 className='text-3xl mt-4'>Prerana & Sehab</h1>
                            <p className='mb-10'>It was a very good experience for me. We matched on Shadi <br />com and hit it off with first meeting itself.<br /> The compatibility with the partner is very important and<br /> finding the like-minded matches is quite crucial..</p>
                        </div>



                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item flex-col  lg:flex-row  relative w-full flex gap-32 justify-center items-center">

                        <div className='bg-gray-100 shadow-xl h-[580px] p-8 rounded-md'>
                            <img className='rounded-md' src={'https://i.ibb.co/PcZ9tKg/c4.jpg'} alt="" />
                            <h1 className='text-3xl mt-4'>Kinshuk & Mayur</h1>
                            <p className='mb-10'>We met through shaadi.com an it took a long time  to <br /> say a Yes ,in between there was a No as well but we were <br /> estine to be together an now I feel I am the luckiest person<br /> to have him </p>
                        </div>

                        <div className='bg-gray-100 shadow-xl   p-8 rounded-md'>
                            <img className='rounded-md ml-3' src={'https://i.ibb.co/2K8Hyjm/c7.jpg'} alt="" />
                            <h1 className='text-3xl mt-4'>Heena & Chause</h1>
                            <p className='mb-10'> Hi Shaadi.com team, I am so happy to share our story with <br /> you. I am a Punjabi and account was created by my parents <br /> and he is a tamil and account was handled by him . Last year <br /> one fine day in first week of August 2022, a request on<br />Shaadi.com changed our lives. </p>
                        </div>


                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item  flex-col lg:flex-row  relative w-full flex gap-32 justify-center items-center">

                        <div className='bg-gray-100 shadow-xl  h-[580px] p-8 rounded-md'>
                            <img className='rounded-md ml-3' src={'https://i.ibb.co/zs6tnkv/c3.jpg'} alt="" />
                            <h1 className='text-3xl mt-4'>Shreya & Shubham</h1>
                            <p className='mb-10'>I actually lost hope of all matrimonial sites after so many fake <br /> profiles and people only looking for hookups but then i met <br /> Shubham  and he was all what i looked for. Thank you.</p>
                        </div>


                        <div className='bg-gray-100 shadow-2xl   p-8 rounded-md'>
                            <img className='rounded-md w-[420px] ml-5' src={'https://i.ibb.co/LrRRz6w/c6.jpg'} alt="" />
                            <h1 className='text-3xl mt-4'>Abhishek & Anuradha</h1>
                            <p className='mb-10'>It was a mesmerizing experience, we met amidst the uncountable <br /> crowd and felt touched, he is just a perfect reflection of my soul.<br /> His quintessential characteristics made me proceed distantly <br /> toward a joyful ride for the rest of my life.</p>

                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Success;