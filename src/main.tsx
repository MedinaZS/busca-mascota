import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { APP_ROUTES } from './helper/utility.tsx';
import Home from './views/Home.tsx';



const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="" element={<App />}>
			<Route path={APP_ROUTES.HOME} element={<Home />} />
			<Route path="*" element={<p className='text-center fs-1 my-auto'>404 Path not resolved</p>} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
