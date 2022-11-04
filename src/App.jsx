import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Footer from './components/Footer';
import Contact from "./pages/Contact";
import  Home  from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);


function App() {

  return (
    <div className="container">
      <div className="app">
        <RouterProvider router={router} />
      </div>
      <div className="footer-space"></div>
      <Footer />
    </div>
  );
}

export default App;
