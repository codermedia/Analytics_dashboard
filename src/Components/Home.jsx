import { currencies } from "../constants/data";
import Linechart from "./Linechart";
import Barchart from "./Barchart";

const Home = () => {
  return (
    <div className="p-10">
      <div className="Main">
        <span>Main Dashboard</span>
        <div className="mt-10 w-full">
          <ul className="flex gap-x-10">
            {currencies.map((currency, index) => (
              <li
                key={index}
                className="flex rounded-3xl border border-slate-300 px-8 py-4 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg
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
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 flex w-full justify-between">
        <Linechart />
        <Barchart />
      </div>
    </div>
  );
};

export default Home;
