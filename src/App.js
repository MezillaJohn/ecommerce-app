import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cart from "./components/Cart/Cart";
import "./App.scss";
import Flutterwave from "./Payment/Flutterwave";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/product/:id",
        element: <Product />,
      },

      {
        path: "/products/:id",
        element: <Products />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/store",
        element: <Store />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/checkout",
        element: <Flutterwave />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
