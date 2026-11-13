import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import OrderPage from "./components/pages/OrderPage.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>,
   // errorElement: <ErrorPage/>
  },
    {
    path: '/order',
    element: <OrderPage/>,
    //errorElement: <ErrorPage/>
  },
  {
    path: '*',
    element: <ErrorPage/>,
    //errorElement: <ErrorPage/>
  }
])

function App() {
  
  
  return( 
  <RouterProvider router={router}></RouterProvider>
  
    //<LoginPage/>
  )
}

export default App
