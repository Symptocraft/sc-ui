import { BrowserRouter, Routes } from 'react-router-dom';
import AppRoutes from './routes'
import './App.scss'
import { Fragment } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Menu from './components/menu';


function App() {
  const routes = AppRoutes();
  return (
    <BrowserRouter>
      <ToastContainer />
      <Fragment>
        <div className="appContainer">
          <Menu />
          <Routes>
            {routes}
          </Routes>
        </div>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
