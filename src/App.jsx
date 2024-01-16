import "./App.css";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
// import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <About />,
      },
      // links for products on the homepage
     
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <></>
    </RouterProvider>
  );
}

export default App;
