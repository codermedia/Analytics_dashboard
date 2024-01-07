import { useEffect, useState } from "react";
import bg from "../assets/blue.jpg";
import Sarath from "../assets/sarath.jpg";

const ProfileCard = () => {
  const [result, setResult] = useState({});
  const [size, setSize] = useState({});
  const [followers, setFollowers] = useState({});
  const [repos, setRepos] = useState({});
  useEffect(() => {
    async function handleApi() {
      const res = await fetch(`https://api.github.com/users/codermedia/repos`)
        .then((res) => {
          console.log("yeay");
          return res.json();
        })
        .catch((err) => {
          console.log("Error");
        });

      setResult(res);
    }
    handleApi();

    async function handleFollowing() {
      const res1 = await fetch(
        `https://api.github.com/users/codermedia/following`,
      )
        .then((res1) => {
          console.log("yeay");
          return res1.json();
        })
        .catch((err) => {
          console.log("Error");
        });

      setSize(res1);
    }
    handleFollowing();

    async function handleFollowers() {
      const res2 = await fetch(
        `https://api.github.com/users/codermedia/followers`,
      )
        .then((res2) => {
          console.log("yeay");
          return res2.json();
        })
        .catch((err) => {
          console.log("Error");
        });

      setFollowers(res2);
    }
    handleFollowers();

    async function handleRepos() {
      const res3 = await fetch(`https://api.github.com/users/codermedia/repos`)
        .then((res3) => {
          console.log("yeay");
          return res3.json();
        })
        .catch((err) => {
          console.log("Error");
        });

      setRepos(res3);
    }

    handleRepos();
  }, []);

  return (
    <div className="mr-3 border-2 border-slate-100 bg-white p-5 transition-all duration-500 ease-in-out">
      <div className="bg-url relative mx-auto flex h-24 justify-center">
        <img src={bg} alt="background" className="w-full object-cover" />
        <img
          src={result[0]?.owner.avatar_url}
          alt="img"
          className="absolute top-0 h-24 w-auto translate-y-1/2 rounded-full border-2 border-white object-cover"
        />
      </div>
      <div className="my-5 mt-12 flex flex-col items-center justify-center">
        <img src="" alt="" />
        <p className="font-bold">{result[0]?.owner?.login}</p>
        <p className="text-[14px] capitalize text-slate-400">
          Software engineer
        </p>
      </div>
      <div className="flex justify-center gap-x-6">
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{Object.keys(repos).length}</span>
          <span className="text-[14px] text-slate-400">Repo</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{Object.keys(size).length}</span>
          <span className="text-[14px] text-slate-400">Following</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{Object.keys(followers).length}</span>
          <span className="text-[14px] text-slate-400">Followers</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
