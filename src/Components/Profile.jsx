import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import Skeleton from "react-loading-skeleton";
import { fetchProfile, fetchRepo } from "../api/responses";
import { Context } from "../contexts/Context";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [repodata, setRepoData] = useState({});

  const { dta } = useContext(Context);
  const [dt] = dta;

  let isProfileRendered = useRef(false);

  const preload = async () => {
    try {
      setData(await fetchProfile(dt));
    } catch (err) {
      console.log(err);
    }
  };

  const preloadrepo = async () => {
    try {
      setRepoData(await fetchRepo(dt));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    preload();
    preloadrepo();

    if (isProfileRendered.current === false) {
      console.log(isProfileRendered.current);

      return () => {
        isProfileRendered.current = true;
      };
    }
  }, [dt]);

  return (
    <section>
      {loading && <Skeleton className="h-screen" />}
      {!loading && data && repodata && (
        <div className="p-10">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold leading-5 text-slate-800">
              Profile
            </span>
            {/* <Searchbox /> */}
            <Link
              to={data.html_url}
              target="_blank"
              className="rounded-full border bg-indigo-600 p-2 px-4 text-white transition duration-700 ease-in-out hover:border hover:border-indigo-500 hover:bg-white hover:text-inherit"
            >
              View profile
            </Link>
          </div>

          <div className="grid grid-cols-1 pt-5">
            <ProfileCard data={data} />

            <div className="mt-4 w-full rounded-lg border-2">
              <span className="block bg-slate-100 py-5 text-center text-[17px] font-semibold text-slate-900">
                Recent projects
              </span>
              <div className="my-2 flex flex-col p-5 py-3">
                <span className="my-2 text-[16px] font-semibold text-slate-700">
                  Here you can find more details about your projects.
                </span>
                <div className="my-2 flex max-h-[120px] flex-col gap-x-5 gap-y-5 overflow-y-auto">
                  {Array.from(repodata)
                    .slice(0, 4)
                    .map((item, index) => (
                      <div key={index} className="flex items-start gap-x-5">
                        <span className="text-[16px] font-semibold text-slate-900">
                          {index + 1}.
                        </span>
                        <div className="flex w-full flex-col justify-center">
                          <span className="text-[16px] font-semibold capitalize text-slate-900">
                            {item.name}
                          </span>
                          <div className="flex items-center gap-x-3 text-slate-600">
                            <span>
                              Language used : {item.language || "N/A"}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!loading && !data && (
        <span className="flex justify-center p-10 text-xl font-semibold text-slate-500">
          No data found
        </span>
      )}
    </section>
  );
};

export default Profile;
