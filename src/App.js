import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import PrivateRoute from './auth/PrivateRoute';
import HomePage from './pages/HomePage'
import LoginPage from './auth/LoginPage';
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'
import ColorGradingPage from './pages/ColorGradingPage'
import SfxPage from './pages/SfxPage'
import VfxPage from './pages/VfxPage'
import YoutubePage from './pages/YoutubePage'
import TiktokPage from './pages/TiktokPage'
import InstagramPage from './pages/InstagramPage'
import WeddingPage from './pages/WeddingPage'
import ScrollToTop from './components/backToTop/ScrollToTop';
import UserDashBoard from './container/UserDashBoard'

import './App.css';

function App() {
  return (
    <>
      <ScrollToTop /> 
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path='login' element={<LoginPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='service' element={<ServicePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='color-grading-videos' element={<ColorGradingPage />} />
          <Route path='sfx-videos' element={<SfxPage />} />
          <Route path='vfx-videos' element={<VfxPage />} />
          <Route path='youtube-videos' element={<YoutubePage />} />
          <Route path='tiktok-videos' element={<TiktokPage />} />
          <Route path='instagram-videos' element={<InstagramPage />} />
          <Route path='wedding-videos' element={<WeddingPage />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path='dashboard' element={<UserDashBoard />} />
          </Route>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;