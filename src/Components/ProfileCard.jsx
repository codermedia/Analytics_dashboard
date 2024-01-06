import bg from "../assets/blue.jpg";
import Sarath from "../assets/sarath.jpg";

const ProfileCard = () => {
  return (
    <div className="mr-3 border-2 border-slate-100 bg-white p-5">
      <div className="bg-url relative mx-auto flex h-24 justify-center">
        <img src={bg} alt="background" className="w-full object-cover" />
        <img
          src={Sarath}
          alt="img"
          className="absolute top-0 h-24 w-auto translate-y-1/2 rounded-full border-2 border-white object-cover"
        />
      </div>
      <div className="my-5 mt-12 flex flex-col items-center justify-center">
        <img src="" alt="" />
        <p className="font-bold">Sarath the Great</p>
        <p className="text-[14px] capitalize text-slate-400">
          Software engineer
        </p>
      </div>
      <div className="flex justify-center gap-x-6">
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">17</span>
          <span className="text-[14px] text-slate-400">Posts</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">9.7k</span>
          <span className="text-[14px] text-slate-400">Followers</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">274</span>
          <span className="text-[14px] text-slate-400">Followers</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
