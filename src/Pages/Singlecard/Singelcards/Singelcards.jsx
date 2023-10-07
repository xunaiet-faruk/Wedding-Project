import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Singelcards = ({ details }) => {

    const {  service_name, price, image, description } = details || {}
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='flex items-center  justify-center mt-5'>
                <img className='h-[800px]  w-[1200px] p-12 ' src={image} alt="" />
                <div>
                    <p className='text-center text-5xl font-bold'>{service_name}</p>
                    <p className='text-center text-xl mt-2 text-red-500'>Price : {price}</p>
                    <p className='text-center text-md'>{description}</p>
                 
                </div>
            </div>
          
          
            
        </div>
    );
};

export default Singelcards;