import { useContext, useEffect, useRef, useState } from "react";
import Searchbox from "./search/Searchbox";
import Skeleton from "react-loading-skeleton";
import Card from "./ui/Card";
import { Context } from "../contexts/Context";
import { fetchProfile } from "../api/responses";
import Linechart from "./charts/Linechart";
import Barchart from "./charts/Barchart";

const Test = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const isProfileRendered = useRef(false);

  const { dta } = useContext(Context);
  const [dt] = dta;

  console.log("username=", dt);

  const preload = async () => {
    try {
      const res = await fetchProfile(dt);

      setData(await res);
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

      return () => {
        isProfileRendered.current = true;
      };
    }
  }, [dt]);

  return (
    <section className="h-screen">
      {loading && <Skeleton className="h-screen" />}
      {!loading && data && (
        <div className="p-10">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold leading-5 text-slate-800">
              Dashboard
            </span>
            <Searchbox />
          </div>
          <div className="my-12 w-full">
            <div className="flex flex-wrap gap-x-12">
              <Card
                icon={
                  <img
                    src={data.avatar_url}
                    alt="picture"
                    className="h-8 w-8 rounded-full"
                  />
                }
                title="Name"
                display={data?.name.split(" ")[0]}
              />
              <Card
                icon={
                  <svg
                    xmlns="http://www.w3.1org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-8 w-8 text-slate-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>
                }
                title="Followers"
                display={data.followers}
              />
              <Card
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-8 w-8 text-slate-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                    />
                  </svg>
                }
                title="Following"
                display={data.following}
              />
              <Card
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-8 w-8 text-slate-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                    />
                  </svg>
                }
                title="Created on"
                display={data?.created_at
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-")}
              />
            </div>
          </div>
          <div className="my-10 flex w-full justify-between">
            <Linechart />
            <Barchart />
          </div>
        </div>
      )}
    </section>
  );
};

export default Test;
