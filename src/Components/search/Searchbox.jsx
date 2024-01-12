import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../contexts/Context";
import { fetchProfile } from "../../api/responses";

const Searchbox = (props) => {
  const [user, setUser] = useState("");
  const [user_selected, setUser_selected] = useState("");
  const [options, setOptions] = useState([]);

  const { dta } = useContext(Context);

  const [dt, setDt] = dta;

  const searchList = async (user) => {
    try {
      const res = await fetch(
        import.meta.env.VITE_APP_GITHUB_API_URL +
          "search/users?q=" +
          user +
          "&per_page=3",
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      //new Promise((resolve) => setTimeout(resolve, 1000));
      const data = await res.json();

      setOptions(data.items);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(options);

  const handleChange = (e) => {
    setUser(e.target.value);

    if (e.target.value !== "") {
      searchList(e.target.value);
    }
  };

  const handleUserChange = (value) => {
    setUser_selected(value);
    setOptions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setUser(input);
    console.log(user);

    const res = await fetchProfile(user);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    setDt(data);
  };

  return (
    <section>
      <form
        className="relative flex cursor-pointer items-center rounded-full bg-[#f87171]"
        onSubmit={handleSubmit}
      >
        <input
          id="search"
          type="text"
          placeholder="Search your profile here"
          autoComplete="off"
          className="flex h-10 w-[300px] items-center rounded-l-full border-2 border-r-0 border-t-2 p-2 px-3 text-sm text-slate-500 focus:border-slate-300 focus:outline-none max-md:hidden"
          value={user_selected || user}
          onChange={handleChange}
          onFocus={() => {
            setUser(user_selected);
            setUser_selected("");
          }}
        />
        <button title="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mx-4 w-6 text-xl text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
      {options && user && (
        <ul className="absolute my-2 flex w-[300px] flex-col justify-center">
          {Object.entries(options).map((item, index) => {
            return (
              <div
                className="my-3 flex items-center gap-x-5 rounded-full bg-slate-50 p-2 px-3"
                id="user"
                key={index}
              >
                <img
                  src={item[1].avatar_url}
                  className="h-8 w-8 rounded-full"
                />
                <li key={index}>
                  <button
                    className="w-full text-left"
                    onClick={() => handleUserChange(item[1].login)}
                  >
                    {item[1].login}
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Searchbox;
