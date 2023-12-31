import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import { Link } from 'react-router-dom';

import Marquee from "react-fast-marquee";

const Singelcards = ({ details }) => {

    const {  service_name, price, image, description } = details || {}
    return (
        <div>
           
            <div className='lg:flex items-center   justify-center mt-5'>
                <img className='h-[800px]  w-[1200px] p-12 ' src={image} alt="" />
                <div className='lg:mr-12'>
                    <p className='text-center text-5xl font-bold'>{service_name}</p>
                    <Marquee><p className='text-center text-xl mt-2 text-red-500'>Price : {price}</p> </Marquee>
                    <p className='text-center text-md'>{description}</p>
                 
                </div>
            </div>
          
          
            
        </div>
    );
};

export default Singelcards;