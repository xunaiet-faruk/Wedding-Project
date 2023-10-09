

const Aboutus = () => {
    return (
        <div>
            <h1 className="text-cebter text-5xl font-bold italic  mb-4 text-center mt-16 pt-8">About <span className="text-red-400"> Us</span> </h1>

            <div className="max-w-7xl mx-auto p-10 overflow-x-hidden" data-aos="flip-right" data-aos-duration="1500">
                <div className="bg-pink-50  h-[800px] lg:h-[290px] md:h-[500px] mb-5 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  justify-between ml-32 lg:p-5 items-center ">
                        <div className="mt-12">
                            <img src={'https://i.ibb.co/BgWTz6v/ic1.png'} alt="" />
                            <p className="text-3xl  font-bold">300+ </p>
                            <p className="font-semibold text-xl mr-5">Online Portals</p>
                        </div>
                        <div className="mt-12">
                            <img src={'https://i.ibb.co/hBYpV7R/ic2.png'} alt="" />
                            <p className="text-3xl  font-bold">3k+</p>
                            <p className="font-semibold text-xl mr-5">Employees</p>
                        </div>
                        <div className="mt-12 ">
                            <img src={'https://i.ibb.co/RcTGFSz/ic3.png'} alt="" />
                            <p className="text-3xl  font-bold">18k+ </p>
                            <p className="font-semibold text-xl mr-5">Shareholders</p>
                        </div>
                        <div className="mt-12">
                            <img src={'https://i.ibb.co/fFHzK4q/ic4.png'} alt="" />
                            <p className="text-3xl  font-bold"> 5 Milion </p>
                            <p className="font-semibold text-xl mr-5">Happy Customers</p>
                        </div>

                    </div>


                </div>
         </div>
        </div>
    );
};

export default Aboutus;