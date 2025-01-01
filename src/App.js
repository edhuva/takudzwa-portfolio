import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='Register' element={<RegisterPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='product/:id' element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
