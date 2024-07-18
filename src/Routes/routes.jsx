import Layout from "../Layout/layout";
import About from "../pages/About";
import Home from "../pages/Home";

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
          
      ],
    },
  ];

  export default Routes; 