import { createBrowserRouter } from 'react-router-dom';
import Mainroute from '../Mainroute/Mainroute';
import Home from '../Pages/Home/Home';
import Servises from '../Pages/Servises/Servises';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';

const Route=createBrowserRouter([
    {
        path:'/',
        element:<Mainroute></Mainroute>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
          {
            path:'/service',
            element:<Servises></Servises>
          },
          {
            path:'login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element:<Register></Register>
          },
          {
            path:'/about',
            element:<About></About>
          },
          {
            path:'/contact',
            element:<Contact></Contact>
          },
          
          
        ]
    }
])

export default Route;