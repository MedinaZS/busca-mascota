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
import Terminos from './views/Terminos.tsx';
import Licencia from './views/Licencia.tsx';


import { Exito } from './views/Exito.tsx';
import Detalle_Adopcion from './views/Detalle_Adopcion.tsx';
import DetalleReporte from './views/DetalleReporte.tsx';
import AdoptionForm from './views/AdoptionForm.tsx';
import ListaAdopciones from './views/ListaAdopciones.tsx';
import { ExitoAdopcion } from './views/ExitoAdopcion.tsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path={APP_ROUTES.HOME} element={<Home />} />
      <Route path={APP_ROUTES.EXITO_PARAMS} element={<Exito />} />
      <Route path={APP_ROUTES.DETALLE_ADOPCION_PARAMS} element={<Detalle_Adopcion />} />
      <Route path={APP_ROUTES.PUBLICAR_MASCOTA} element={<Publicar />} />
      <Route path={APP_ROUTES.BUSCAR_MASCOTA} element={<Buscar />} />
      <Route path={APP_ROUTES.COLABORAR} element={<Colaborar />} />
      <Route path={APP_ROUTES.TERMS} element={<Terminos />} />
      <Route path={APP_ROUTES.LINCENCE} element={<Licencia />} />
      <Route path={APP_ROUTES.DETALLE_REPORTE_PARAMS} element={<DetalleReporte />} />
      <Route path={APP_ROUTES.ADOPCIONES} element={<ListaAdopciones />} />
      <Route path={APP_ROUTES.PUBLICAR_ADOPCION} element={<AdoptionForm />} />
      <Route path={APP_ROUTES.EXITO_ADOPCION_PARAMS} element={<ExitoAdopcion />} />
      <Route path="*" element={<p className='text-center fs-1 my-auto'>404 Path not resolved</p>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,

)
