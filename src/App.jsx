import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Footer from './components/Footer';
import  Home  from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


function App() {

  return (
    <div>
      <div className="app">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
