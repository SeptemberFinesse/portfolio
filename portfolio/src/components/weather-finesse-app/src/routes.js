import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Weather from './components/Weather';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'weather',
        element: <Weather />,
      },
    ],
  },
]);

export default router;
