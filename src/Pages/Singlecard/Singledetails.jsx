
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Singelcards from './Singelcards/Singelcards';

const Singledetails = () => {
 
const [details,setdetails] =useState({});
    const {id} =useParams();
    console.log(id)
    const singleloader =useLoaderData();
    useEffect(()=>{

const finddata=singleloader.find(single =>single.id == id);
setdetails(finddata)


    },[id,singleloader])

    return (
        <div>
            <Singelcards details={details}></Singelcards>
        </div>
    );
};

export default Singledetails;