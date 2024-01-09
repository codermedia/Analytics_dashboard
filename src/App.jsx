import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Sidebar,
  Navbar,
  Home,
  Tables,
  Github,
  Profile,
  Login,
  Signup,
} from "./components";
import Signout from "./components/Signout";
import { MyContext } from "./contexts/MyContext";
import { useState } from "react";

const Layout = () => {
  return (
    <div className="relative flex select-none">
      <div className="fixed z-50 h-screen w-72 flex-none overflow-y-auto bg-white">
        <Sidebar />
      </div>
      <div className="flex h-screen w-full flex-col overflow-y-auto bg-slate-50 pl-72">
        {/* <Navbar /> */}
        {/* <div className="border-b-8 border-b-white"></div> */}
        <Outlet />
      </div>
      {/* <div className="h-screen flex-auto bg-white pl-72"></div> */}
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
        path: "/github",
        element: <Github />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/settings",
        element: <span>Settings</span>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/sign-up",
  //   element: <Signup />,
  // },
  // {
  //   path: "/sign-out",
  //   element: <Signout />,
  // },
]);
const App = () => {
  const [dt, setDt] = useState("EmperorSarath");
  return (
    <div className="App">
      <MyContext.Provider value={{ dt, setDt }}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </div>
  );
};
export default App;
