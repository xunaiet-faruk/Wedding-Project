

const Banner = () => {
    return (
        <div className=" h-[600px] bg-pink-50" data-aos-duration="1000" data-aos="zoom-in">

            <div className="flex justify-around max-w-7xl mx-auto">
                <div className="mt-48 text-center">
                    <h1 className=" text-transparent font-display bg-clip-text bg-gradient-to-r from-gray-400 to-pink-300 mb-5 text-5xl font-bold">Trusted Matrimony & Matchmaking organizer </h1>
                        <p className="text-6xl font-display font-semibold italic text-black">Ready for Your dream wedding
                       Services that inspire</p>
                        <button className="btn bg-pink-200 px-4 mt-3 text-black font-semibold text-1xl hover:bg-pink-300">Explore More</button>
                </div>

                <div>

                    <img className="w-[1300px]" src={'https://www.matrimony.com/sites/default/files/2023-03/hero-banner-2.png'} alt="" />

                </div>



            </div>


        </div>





    );
};

export default Banner;