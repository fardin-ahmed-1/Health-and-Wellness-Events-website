import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import './index.css'
import Route from './assets/components/Route';
import ContextApp from './assets/components/ContextApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextApp>
   <RouterProvider router={Route}> </RouterProvider>
   </ContextApp>
  </React.StrictMode>,
)
