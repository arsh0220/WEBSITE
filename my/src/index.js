import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { AdminRoutes , UserRoutes, publicRoutes} from './routes';
import { Navigate } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';

const isAuthenticated = () => !!localStorage.getItem("userToken");
console.log("isAuthenticated",isAuthenticated());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          {AdminRoutes.map(({path,Component}) => (
            <Route
            key={path}
            path={path}
            element={
              <App>
                <Component/>
              </App>
            }
            ></Route>
          ))}
          {UserRoutes.map(({path,Component}) => (
            <Route
            key={path}
            path={path}
            element={
              <App>
                <Component/>
              </App>
            }
            ></Route>
          ))}
          {publicRoutes.map(({path,Component}) => (
            <Route
            key={path}
            path={path}
            element={
              <App>
                <Component/>
              </App>
            }
            ></Route>
          ))}
          <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

  <Route path="/home" element={isAuthenticated() ? <App><Home /></App> : <Navigate to="/login" />} />

        <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
