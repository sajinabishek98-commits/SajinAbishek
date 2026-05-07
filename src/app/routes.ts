import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'projects', Component: Projects },
      { path: 'projects/:projectId', Component: ProjectDetail },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
