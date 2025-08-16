import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/Home/About';
import Contact from './components/pages/Contact';
import Github from './components/pages/Github';

function Layout() {
  return (
    <>
      <Header />
      <main className="content"> {/* Add this wrapper */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/github" element={<Github />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}