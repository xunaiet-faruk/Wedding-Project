

const Banner = () => {
    return (
        <div className=" lg:h-[600px] bg-pink-50" >

            <div className="flex justify-around flex-col md:flex-row max-w-7xl mx-auto">
                <div className="lg:mt-48 md:mt-40 mt-20 md:ml-4 text-center " data-aos="fade-down">
                    <h1 className=" text-transparent font-display bg-clip-text bg-gradient-to-r from-gray-400 to-pink-300 mb-5 md:text-4xl lg:text-5xl text-3xl font-bold">Trusted Matrimony & Matchmaking organizer </h1>
                        <p className="lg:text-6xl text-3xl font-display font-semibold italic text-black">Ready for Your dream wedding
                       Services that inspire</p>
                        <button className="btn bg-pink-200 px-4 mt-3 text-black font-semibold text-1xl hover:bg-pink-300">Explore More</button>
                </div>

                <div className="overflow-x-hidden" data-aos="fade-down"
                  
                    data-aos-duration="1000">

                    <img className="lg:w-[1300px] md:ml-2  -ml-20  md:w-[900px] pt-20 lg:pt-0" src={'https://www.matrimony.com/sites/default/files/2023-03/hero-banner-2.png'} alt="" />

                </div>



            </div>


        </div>





    );
};

export default Banner;