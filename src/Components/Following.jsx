import { useContext, useEffect, useRef, useState } from "react";
import { fetchFollowing } from "../api/responses";
import { Context } from "../contexts/Context";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Following = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);
  const isProfileRendered = useRef(false);

  const { dta } = useContext(Context);
  const [dt, setDt] = dta;

  const preload = async () => {
    try {
      const res = await fetchFollowing(dt);

      setData(await res);
      setCount(await res.length);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    preload();

    if (isProfileRendered.current === false) {
      console.log(isProfileRendered.current);
    }

    return () => {
      isProfileRendered.current = true;
    };
  }, [dt]);

  return (
    <section className="h-screen">
      {loading && <Skeleton className="h-screen" />}
      {!loading && data && (
        <div className="overflow-x-auto p-10">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold leading-5 text-slate-800">
              Followers
            </span>
            <span className="rounded-lg bg-slate-500 p-3 text-lg font-semibold leading-5 text-white">
              {count}
            </span>
          </div>
          <div className="mt-10 max-h-[580px] w-full overflow-y-auto rounded-lg">
            <table className="w-full border-2 text-center text-sm text-gray-500">
              <thead className="sticky top-0 z-40 bg-slate-600 text-xs uppercase text-white">
                <tr>
                  <th className="px-6 py-3">name</th>
                  <th className="px-6 py-3">profile picture</th>
                  <th className="px-6 py-3">id</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.from(data).map((i, index) => {
                  return (
                    <tr
                      className="font-medium capitalize text-slate-800 odd:bg-white even:bg-slate-200"
                      key={index}
                    >
                      <td className="px-6 py-6">{i.login}</td>

                      <td className="px-6 py-6">
                        <img
                          src={i.avatar_url}
                          className="mx-auto h-10 w-10 rounded-full object-cover"
                          alt=""
                        />
                      </td>

                      <td className="px-6 py-6">{i.id}</td>
                      <td className="px-6 py-6">
                        <Link
                          to={i.html_url}
                          target="_blank"
                          className="bg-[#26927c] p-2 normal-case text-white drop-shadow-xl hover:bg-[#26927c] hover:drop-shadow-2xl"
                        >
                          View profile
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default Following;
