import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Tables from "./Components/Tables";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <div className="w-72">
        <Sidebar />
      </div>
      <div className="flex-auto bg-slate-50">
        <Outlet />
      </div>
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
        path: "/tables",
        element: <Tables />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
