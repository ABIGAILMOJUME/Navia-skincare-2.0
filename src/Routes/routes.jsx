import Layout from "../Layout/layout";
import About from "../pages/About";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Bookings from '../pages/Bookings'
import Contact from '../pages/Contact'
import SingleProduct from '../pages/SingleProduct'
import Services from '../pages/Services'

const Routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
            path: "/about",
            element: <About/>,
          },
          {
            path: "/shop",
            element: <Shop/>,
          },
          {
            path: "/bookings",
            element: <Bookings/>,
          },
          {
            path: "/contact",
            element: <Contact/>,
          },
          {
            path: "/singleproduct",
            element: <SingleProduct/>,
          },
          {
            path: "/services",
            element: <Services/>,
          },
      ],
    },
  ];

  export default Routes; 