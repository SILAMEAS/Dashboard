import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import NotFound404 from './NotFound404';
import ButtonComponent from './components/ButtonComponent';
import Dashboard from './pages/test/Dashboard';
import Orders from './pages/test/Orders';
import Customers from './pages/test/Customers';
import Reports from './pages/test/Reports';
import {Constant} from './constant/ConstantVaraible';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound404 />,
    children: [
      {
        index: true,
        path: Constant.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: Constant.ORDERS,
        element: <Orders />,
        loader: () => {
          return 'string';
        },
      },
      {
        path: Constant.CUSTOMERS,
        element: <Customers />,
      },
      {
        path: Constant.REPORTS,
        element: <Reports />,
      },
    ],
  },
]);
