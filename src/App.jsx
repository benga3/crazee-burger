import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import OrderPage from "./components/pages/OrderPage.jsx";

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
