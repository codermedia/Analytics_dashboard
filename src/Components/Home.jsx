import { currencies } from "../constants/data";
import { Barchart, Linechart } from ".";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="p-10">
      <div className="main">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold leading-5 text-slate-500">
            Main Dashboard
          </span>
          <Link
            to="/signin"
            className="rounded-full bg-indigo-500 p-4 px-4 font-semibold leading-5"
          >
            <span className="text-white">Login</span>
          </Link>
        </div>
        <div className="mt-10 w-full">
          <ul className="flex flex-wrap gap-x-6">
            {currencies.map((currency, index) => (
              <li
                key={index}
                className="flex flex-none rounded-3xl border border-slate-300 bg-white px-5 py-4 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg
                hover:shadow-cyan-500"
              >
                <div className="flex h-full w-full gap-x-5">
                  {currency.icon ? (
                    <div className="flex items-center justify-center">
                      {currency.icon}
                    </div>
                  ) : (
                    <>
                      {currency.flag && (
                        <img src={currency.flag} alt="flag" className="h-10" />
                      )}
                    </>
                  )}
                  <div>
                    <div className="flex flex-col">
                      <p>{currency.name}</p>
                      <p>{currency.cash}</p>
                      {currency.count && <p>{currency.count}</p>}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="my-10 border-b-8 border-b-white"></div>
      <div className="mt-10 flex w-full justify-between">
        <Linechart />
        <Barchart />
      </div>
    </section>
  );
};

export default Home;
