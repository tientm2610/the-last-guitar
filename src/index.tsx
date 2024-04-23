import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HelloWorldPage from './Hai/HelloWorldPage';
import SearchParamsPage from './SearchParamsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import UserPage from './pages/UserManage/UserPage';
import ProductPage from './pages/ProductManage/ProductPage';
import LoginForm from './pages/login/LoginForm';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout>
    <BrowserRouter>
      <Routes>

        <Route
          path='/'
          Component={LoginForm}
        />
        
        <Route
          path='/user'
          Component={UserPage}
        />
        <Route
          path='/product'
          Component={ProductPage}
        />
        <Route
          path='/searchparams'
          Component={SearchParamsPage}
        />

      </Routes>
    </BrowserRouter>
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
