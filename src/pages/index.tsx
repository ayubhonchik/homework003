import { useRoutes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./Home/Home"
import LogIn from "./LogIn/LogIn"
import Auth from "./Auth/Auth"
import Statistic from "./statistic/statistic"

function MainRouter() {
  return useRoutes([
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "statistic",
              element: <Statistic />,
            },
          ],
        },
      ]
    },
    {
      path: "/LogIn",
      element: <LogIn />,
    },
  ])
}

export default MainRouter

