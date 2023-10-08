import { useEffect, useState } from "react";
import Banner from "../../Component/Banner/Banner";
import Navbar from "../../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import Allcards from "../Allcards/Allcards";
import Aboutus from "../../Aboutus/Aboutus";
import Success from "../../Success/Success";

const Home = () => {

    const [cards, setcards] = useState([])
    const loaders = useLoaderData();

    useEffect(() => {

        setcards(loaders);

    }, [loaders])

    return (
        <>
            
            <div>
                <Banner></Banner>
            </div>
            <h1 className="text-5xl font-bold mt-5  mb-4 text-cebter italic text-transparent  bg-clip-text bg-gradient-to-b from-yellow-400 f to-pink-500  text-center">OUR SERVISES </h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
                {
                    cards.map(card => <Allcards key={card.id} card={card}></Allcards>)
                }
            </div>

                
                   
                    <div> 
                
                        <Aboutus></Aboutus>
                        <Success></Success>
                </div>
               

        </>
    );
};

export default Home;