import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Root from './Root';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';
import ForgotePass from '../pages/ForgotePass';
import ServiceDetailes from '../pages/ServiceDetailes';
import PrivateRoutes from './PrivateRoutes';
import Teams from './Teams';
import TeamProfile from './TeamProfile';
import Blogs from '../pages/Blogs';
import BlogDetails from '../pages/BlogDetails';


const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root> </Root>,
      errorElement:<ErrorPage> </ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home> </Home>,
            loader: ()=> fetch('/services.json'),
                            
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/blogs',
            element:<Blogs> </Blogs>,
             loader: ()=> fetch('/blogs.json')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register> </Register>
        },
        {
            path:'/forgote_password',
            element: <ForgotePass> </ForgotePass>
        },{
            path:'/serviceDetailes/:id',
            element: <PrivateRoutes> <ServiceDetailes> </ServiceDetailes> </PrivateRoutes>,
            loader: ()=> fetch('/services.json')
            
        },
        {
            path: '/teams',
            element:<Teams></Teams>,
            loader: ()=> fetch('/teams.json'),          
        },
        {
            path: 'TeamProfile/:id',
            element: <PrivateRoutes><TeamProfile> </TeamProfile></PrivateRoutes>,
            loader: ()=> fetch('/teams.json'),  
        },
        {
            path:'/blogDetails/:id',
            element: <PrivateRoutes><BlogDetails> </BlogDetails></PrivateRoutes>,
            loader: ()=> fetch('/blogs.json')
        }
        

      ]
    },
  ]);

export default Route