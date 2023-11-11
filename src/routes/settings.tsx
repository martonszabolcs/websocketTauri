import { Outlet } from "react-router-dom";
import clsx from "clsx";

export default function Settings() {
  return (
    <div className="flex flex-row h-full w-full p-6">
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1 font-space-grotesk">
          Choose Theme
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box max-h-60 w-52 overflow-y-scroll"
        ></ul>
      </div>
    </div>
  );
}
