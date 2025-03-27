import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import { Home, Services, About, Contact } from './pages/English/index.jsx';
import { EsHome, EsServices, EsAbout, EsContact } from './pages/Spanish/index.jsx';

const BrowserRouter = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Services',
        element: <Services />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/es',
        element: <EsHome />
      },
      {
        path: '/es/Services',
        element: <EsServices />
      },
      {
        path: '/es/About',
        element: <EsAbout />
      },
      {
        path: '/es/Contact',
        element: <EsContact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={BrowserRouter} />
)