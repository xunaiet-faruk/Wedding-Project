import { createBrowserRouter } from 'react-router-dom';
import Mainroute from '../Mainroute/Mainroute';
import Home from '../Pages/Home/Home';
import Servises from '../Pages/Servises/Servises';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Singledetails from '../Pages/Singlecard/Singledetails';
import Private from '../Private/Private';

const Route=createBrowserRouter([
    {
        path:'/',
        element:<Mainroute></Mainroute>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() =>fetch('/Wedding.json')
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
          {
            path:'/singledetails/:id',
            element: <Private><Singledetails></Singledetails></Private>,
            loader: () => fetch('/Wedding.json')
          }
          
          
        ]
    }
])

export default Route;