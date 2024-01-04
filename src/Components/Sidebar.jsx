import { Link } from "react-router-dom";
import { logo, navLinks } from "../constants/data";
const Sidebar = () => {
  return (
    <div className="w-full p-10">
      <a href="#" className="capitalize text-xl font-semibold">
        {logo}
      </a>
      <ul className="flex flex-col justify-center mt-8">
        {navLinks.map((item, index) => {
          return (
            <li key={index} className="py-5">
              <Link to={item.path} className="flex items-center gap-x-5">
                {item.icon}
                <span className="capitalize">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
