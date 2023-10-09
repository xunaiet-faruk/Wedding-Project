
import { GiSelfLove } from 'react-icons/gi';
import { Link } from 'react-router-dom';


const Allcards = ({card}) => {
    const { id, service_name, price, image, description }=card || {}
 

 


    return (
     
        
        <div>
          
            <div className="relative flex md:ml-2 md:w-[350px] lg:w-[400px] h-[600px] mt-5 flex-col rounded-xl bg-pink-50 shadow-xl bg-clip-border text-gray-700 " data-aos="flip-right" data-aos-duration="1500">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img 
                        src={image}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2">
                        <p className="block  font-sans flex justify-between font-bold text-xl leading-relaxed text-blue-gray-900 antialiased">
                         {service_name}
                            <button >  <GiSelfLove></GiSelfLove></button>
                        </p>

                     

                        <p className="block text-2xl font-sans  font-medium leading-relaxed text-blue-gray-900 antialiased">
                            <span className='font-bold'> Price</span> : {price}
                         
                        </p>
                    </div>
                    <p className="block font-sans text-md font-normal leading-normal text-gray-700 antialiased opacity-75">
                     {description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/singledetails/${id}`}>
                   
                        <button
                            className="block w-full btn-secondary select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            Views Details
                        </button>
                   </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Allcards;