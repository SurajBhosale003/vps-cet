import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

const NavBar = lazy(()=> import('./components/Navbar'))
const Home = lazy(() => import('./pages/Home'));
const GellaryPage = lazy(() => import('./pages/GellaryPage'));
const AboutMe = lazy(() => import('./pages/AboutMe'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const FooterPage = lazy(() => import('./pages/Footer'));
const Admin = lazy(() => import('./pages/Admin'));
const Department = lazy(() => import('./pages/Department'));
const Admission = lazy(() => import('./pages/Admission'));
const Fy = lazy(() => import('./pages/admission/Fy'));
const Dsy = lazy(() => import('./pages/admission/Dsy'));


import Loading from "./components/Loading";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
     <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gellary" element={<GellaryPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/department" element={<Department />} />
          <Route path="/admission" element={<Admission />} />
            <Route path="/admission-dsy" element={<Dsy />} />
            <Route path="/admission-fy" element={<Fy />} />
          

          <Route path="/admin" element={<Admin />} />
        </Routes>
        <FooterPage />
      </Suspense>
    </Router>
  );
}

export default App;
