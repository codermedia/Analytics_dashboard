import { currencies } from "../constants/data";

const Home = () => {
  return (
    <div className="p-10">
      <h1>Main Dashboard</h1>
      <div className="mt-10">
        <ul className="flex">
          {currencies.map((currency, index) => {
            return (
              <li
                key={index}
                className="mr-10 py-4 px-8 border border-slate-300 
                rounded-3xl"
              >
                <div className="flex h-full w-full">
                  <div>
                    {currency.icon !== null && currency.icon}
                    {currency.flag && (
                      <img src={currency.flag} alt="flag" className="h-10" />
                    )}
                  </div>
                  <div>
                    <div classname="flex flex-col">
                      <p>{currency.name}</p>
                      <p>{currency.cash}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
