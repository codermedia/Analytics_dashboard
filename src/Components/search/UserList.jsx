import { useContext, useEffect, useRef, useState } from "react";
import { fetchProfile } from "../../api/responses";
import { Context } from "../../contexts/Context";

const UserList = ({ options }) => {
  console.log(options);
  return (
    options && (
      <ul className="bg-slate-200">
        {Object.entries(options).map((item, index) => {
          // console.log(item[1]);
          return (
            <>
              <li key={index}>
                <button className="w-full text-left">{item[1].login}</button>
              </li>
            </>
          );
        })}
      </ul>
    )
  );
};

export default UserList;
