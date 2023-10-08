import { Outlet } from "react-router-dom";
import Fotter from "../Component/Fotter/Fotter";
import Navbar from "../Navbar/Navbar";

const Mainroute = () => {
    return (
        <div>
            <div className="bg-pink-50">
                <Navbar></Navbar>

            </div>
            <Outlet></Outlet>
          <Fotter></Fotter>
        </div>
    );
};

export default Mainroute;