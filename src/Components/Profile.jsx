import ProfileCard from "./ProfileCard";
import img from "../assets/blue.jpg";

const Profile = () => {
  return (
    <div className="p-10">
      <span className="text-xl font-semibold leading-5 text-slate-500">
        Profile
      </span>
      <div className="grid grid-cols-3 py-5">
        <ProfileCard />
        <div className="mr-3 rounded-lg bg-indigo-500  p-5">
          <h1>Storage</h1>
        </div>
        <div className=" rounded-lg bg-indigo-500  p-10">
          <h1>Upload</h1>
        </div>
        <div className="mt-4 border-2 bg-white p-5">
          All Projects
          <div className="mt-5 flex flex-col">
            <h1>
              Here you can find more details about your projects. Keep you user
              engaged by providing meaningful information.
            </h1>
            <div className="my-3 flex gap-x-5">
              <img
                src={img}
                alt=""
                className="h-20 w-20 rounded-lg object-cover"
              />
              <div className="flex flex-col items-center ">
                <span>Technology behind the Blockchain</span>
                <span>Project #1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
