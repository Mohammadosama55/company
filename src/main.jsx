import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/Home/Home';
import About from './components/Home/About';
import Contact from './components/pages/Contact';
import Github from './components/pages/Github';
import Login from './components/pages/Login';
import { AuthProvider } from './components/context/AuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },
      {
        path: 'github',
        element: <Github />,
        loader: async () => {
          const res = await fetch('https://api.github.com/users/Mohammadosama55/repos?per_page=100');
          if (!res.ok) throw new Error('Failed to fetch repos');
          return res.json();
        }
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
     <AuthProvider>  {/* Wrap RouterProvider with AuthProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);