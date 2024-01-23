import { BrowserRouter, Routes } from 'react-router-dom';
import AppRoutes from './routes'
import './App.css'
import { Fragment } from 'react';

function App() {
  const routes = AppRoutes();
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          {routes}
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
