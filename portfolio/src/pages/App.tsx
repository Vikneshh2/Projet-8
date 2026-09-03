import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
// import Contact from "./Contact";
// import Ressources from "./Ressources";
// import Skills from "./Skills";
import Projects from "./Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  // {
  //   path: "/skills",
  //   element: <Skills />,
  // },
  // {
  //   path: "/ressources",
  //   element: <Ressources />,
  // },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
