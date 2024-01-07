import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";
import { projectList } from "../constants/data";
import { useEffect, useState } from "react";

const Profile = () => {
  return (
    <div className="p-10">
      <span className="text-xl font-semibold leading-5 text-slate-500">
        Profile
      </span>
      <div className="grid grid-cols-3 py-5">
        <ProfileCard />
        <div className="mr-3 rounded-lg bg-indigo-500 p-5">
          <h1>Storage</h1>
        </div>
        <div className="rounded-lg bg-indigo-500 p-10">
          <h1>Upload</h1>
        </div>
        <div className="mt-4 border-2 bg-white p-5">
          All Projects
          <div className="mt-5 flex flex-col">
            <h1>
              Here you can find more details about your projects. Keep you user
              engaged by providing meaningful information.
            </h1>
            <div className="my-3 flex flex-col gap-x-5 gap-y-5">
              {projectList.map((item, index) => (
                <div key={index} className="flex items-center gap-x-5">
                  <img
                    src={item.img}
                    alt=""
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="flex w-full flex-col">
                    <span className="text-[16px]">{item.title}</span>
                    <div className="flex items-center gap-x-3">
                      <span>{item.description}</span>
                      <Link className="text-indigo-900 underline">
                        <span>View Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
