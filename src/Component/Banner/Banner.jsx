

const Banner = () => {
    return (
        <div>
           

            <div className="carousel w-full h-[700px]">
                <div id="slide1" className="carousel-item   bg-black relative w-full">
                    <img src="https://i.ibb.co/8YJdf3s/luxury-wedding-tent-with-decor-banquet.jpg" className="w-full" />
               
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div>
                            <p className="text-transparent text-center  bg-clip-text bg-gradient-to-b from-slate-400 font-semibold to-gray-300 italic text-7xl">Welcome To our weeding Webside</p>
                           <p className="text-center italic font-bold text-4xl italic text-gray-200 "> This is best webside for Weeeding partys</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src=" https://i.ibb.co/BVRt89p/look-from-wedding-altar-cheerful-wedding-couple-during-ceremony-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <p className="text-transparent text-center  bg-clip-text bg-gradient-to-b from-slate-400 font-semibold to-gray-300 italic text-7xl">Everything about your Wedding in One Place</p>

                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/5vRd4Hb/decorated-banquet-hall-with-served-round-table-with-hydrangea-centerpiece-chiavari-chairs.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <p className="text-transparent  bg-clip-text bg-gradient-to-b from-green-400 font-semibold to-red-500 italic text-center text-7xl">Ceremonies such as yellowing, sangeet,<br/>mehndi are organized here.</p>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/V2ZqZmx/brides-couple-cutting-wedding-cake.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <p className="text-transparent  bg-clip-text bg-gradient-to-b  from-white font-semibold to-gray-500 italic text-center text-7xl">Bakeries specialize in crafting wedding cakes, cupcakes, and other sweet treats for the reception.</p>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;