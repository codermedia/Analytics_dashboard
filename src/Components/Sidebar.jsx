import { Link } from "react-router-dom";
import { logo, navLinks } from "../constants/data";
const Sidebar = () => {
  const [text1, text2] = logo.split(" ");
  return (
    <div className="my-10 flex w-full flex-col">
      <Link to="/" className="mx-auto mb-10 text-xl font-semibold capitalize">
        <span className="text-orange-700">{text1}</span>&nbsp;
        {text2}
      </Link>
      <div className="border-b border-b-slate-200"></div>
      <ul className="my-8 flex flex-col justify-center pl-10">
        {navLinks.map((item, index) => (
          <li key={index} className="py-5 text-slate-700">
            <Link
              to={item.path}
              className="flex items-center gap-x-5 transition-all duration-300 ease-in-out hover:border-r-4 hover:border-r-indigo-700"
            >
              {item.icon}
              <span className="capitalize">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
