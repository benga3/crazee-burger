import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage.js";
import ErrorPage from "./components/pages/ErrorPage.js";
import OrderPage from "./components/pages/order/OrderPage.js";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>,
  },
    {
    path: '/order/:userName',
    element: <OrderPage/>,
  
  },
  {
    path: '*',
    element: <ErrorPage/>,
    
  }
])

function App() {
  
  
  return( 
  <RouterProvider router={router}></RouterProvider>
  
    //<LoginPage/>
  )
}

export default App
