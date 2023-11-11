import { Outlet } from "react-router-dom";
import clsx from "clsx";
import Text from "../components/text";

export default function Profile() {
  return (
    <div className="flex flex-row h-full w-full p-6">
      <div className="dropdown">
        <Text type="h3">Profile</Text>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box max-h-60 w-52 overflow-y-scroll"
        ></ul>
      </div>
    </div>
  );
}
