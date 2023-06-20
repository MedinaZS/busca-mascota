import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { APP_ROUTES } from './helper/utility.tsx';
import Home from './views/Home.tsx';
import Publicar from './views/Publicar.tsx';
import Buscar from './views/Buscar.tsx';
import Colaborar from './views/Colaborar.tsx';
import { Exito } from './components/Exito.tsx';
import DetalleReporte from './views/DetalleReporte.tsx';




const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="" element={<App />}>
			<Route path={APP_ROUTES.HOME} element={<Home />} />
			<Route path={APP_ROUTES.EXITO} element={<Exito />} />
			<Route path={APP_ROUTES.PUBLICAR_MASCOTA} element={<Publicar />} />
			<Route path={APP_ROUTES.BUSCAR_MASCOTA} element={<Buscar />} />
			<Route path={APP_ROUTES.COLABORAR} element={<Colaborar />} />
			<Route path={APP_ROUTES.DETALLEREPORTE} element={<DetalleReporte />} />
			<Route path="*" element={<p className='text-center fs-1 my-auto'>404 Path not resolved</p>} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	
	<React.StrictMode>
		
		<RouterProvider router={router} />
	
	</React.StrictMode>,

)
