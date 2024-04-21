import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '../../packages/styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Button from './components/Button/index.tsx';
import Card from './components/Card/index.tsx';
import InputDoc from './components/Input/index.tsx';
import HeaderDoc from './components/Header/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'button',
        element: <Button />,
      },
      {
        path: 'card',
        element: <Card />,
      },
      {
        path: 'input',
        element: <InputDoc />,
      },
      {
        path: 'header',
        element: <HeaderDoc />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
