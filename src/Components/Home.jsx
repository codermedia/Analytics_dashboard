import { currencies } from "../constants/data";
import { Barchart, Linechart } from ".";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";

import Skeleton from "react-loading-skeleton";
import { Context } from "../contexts/Context";
import Searchbox from "./search/Searchbox";
import { fetchProfile, fetchRepo } from "../api/responses";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const { user, setUser } = useContext(Context);

  const preload = async (dt) => {
    try {
      setData(await fetchProfile(dt));
    } catch (err) {
      console.log(err);
    }
  };

  const isProfileRendered = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (isProfileRendered.current === false) {
      preload("EmperorSarath");

      console.log(isProfileRendered.current);

      return () => {
        isProfileRendered.current = true;
      };
    }
  }, []);

  let newDt = [];

  for (const [key, value] of Object.entries(data)) {
    newDt.push(value);
  }
  console.log(newDt);

  const name = newDt[18];
  const followers = newDt[28];
  const following = newDt[29];
  const created = newDt[30];
  const avatar = newDt[4];

  console.log(name);

  const arr = [1, 2, 3, 4];

  return (
    <section className="h-screen">
      {loading && <Skeleton className="h-screen" />}
      {!loading && (
        <div>
          <div className="p-10">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold leading-5 text-slate-800">
                Dashboard
              </span>
              <Searchbox />
              {/* <Link
                to="/signin"
                className="flex items-center justify-center rounded-md bg-indigo-500 p-2 px-4 font-semibold leading-5"
              >
                <span className="text-white">Login</span>
              </Link> */}
            </div>
            <div className="mt-10 w-full">
              <ul className="flex flex-wrap gap-x-6">
                {arr.map((val, index) => {
                  return (
                    <li
                      className="flex flex-none rounded-3xl border border-slate-300 bg-white px-5 py-4 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg
                    hover:shadow-cyan-500"
                    >
                      <span>{name}</span>
                      <div className="flex h-full w-full items-center gap-x-5">
                        <img src={avatar} alt="flag" className="h-10" />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="my-10 border-b-8 border-b-white"></div>
          <div className="mt-10 flex w-full justify-between">
            <Linechart />
            <Barchart />
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
