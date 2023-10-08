import { createBrowserRouter } from 'react-router-dom';
import Mainroute from '../Mainroute/Mainroute';
import Home from '../Pages/Home/Home';
import Servises from '../Pages/Servises/Servises';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Contact from '../Pages/Contact/Contact';
import Singledetails from '../Pages/Singlecard/Singledetails';
import Private from '../Private/Private';
import Procedure from '../Pages/procedure/procedure';
import Speacial from '../Pages/Speacila/Speacial';
import Error from '../Error/Error';


const Route=createBrowserRouter([
    {
        path:'/',
        element:<Mainroute></Mainroute>,
        errorElement:<Error></Error>,
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
            path:'/procedure',
            element: <Private><Procedure></Procedure></Private>
          },
          {
            path:'/contact',
            element:<Contact></Contact>
          },
          {

              path:'/speacial',
            element: <Private><Speacial></Speacial></Private>

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