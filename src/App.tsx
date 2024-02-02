import { BrowserRouter, Routes } from 'react-router-dom';
import AppRoutes from './routes'
import './App.scss'
import { Fragment } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const routes = AppRoutes();
  return (
    <BrowserRouter>
      <ToastContainer />
      <Fragment>
        <Routes>
          {routes}
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
