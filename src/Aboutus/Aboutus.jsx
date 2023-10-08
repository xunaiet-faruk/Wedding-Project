

const Aboutus = () => {
    return (
        <div>
           
            <div className="bg-pink-50  h-[290px] mb-32">
                <h1 className="text-cebter text-5xl font-bold italic  text-center mt-28 pt-8">About <span className="text-red-400"> Us</span> </h1>
                <div className="flex justify-around p-5 items-center mt-5"> 
                <div>
                    <img src={'https://i.ibb.co/BgWTz6v/ic1.png'} alt="" />
                    <p className="text-3xl  font-bold">300+ </p>
                        <p className="font-semibold text-xl mr-5">Online Portals</p>
                </div>
                <div>
                    <img src={'https://i.ibb.co/hBYpV7R/ic2.png'} alt="" />
                        <p className="text-3xl  font-bold">3k+</p>
                        <p className="font-semibold text-xl mr-5">Employees</p>
                </div>
                <div>
                    <img src={'https://i.ibb.co/RcTGFSz/ic3.png'} alt="" />
                        <p className="text-3xl  font-bold">18k+ </p>
                        <p className="font-semibold text-xl mr-5">Shareholders</p>
                </div>
                <div>
                    <img src={'https://i.ibb.co/fFHzK4q/ic4.png'} alt="" />
                        <p className="text-3xl  font-bold"> 5 Milion </p>
                        <p className="font-semibold text-xl mr-5">Happy Customers</p>
                </div>
               
            </div>


        </div>
        </div>
    );
};

export default Aboutus;