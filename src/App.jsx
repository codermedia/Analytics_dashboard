import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Sidebar, Home, Tables, Signin, Profile } from "./Components";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <div className="w-72 flex-none">
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
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
