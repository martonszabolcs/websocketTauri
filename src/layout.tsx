import { Outlet, Link } from "react-router-dom";
import Text from "./components/text";
import {
  AiOutlineSetting,
  AiOutlineQuestion,
  AiOutlineClockCircle,
  AiOutlineUser,
} from "react-icons/ai";

export default function Layout() {
  const linkClass = "hover:text-primary w-10 h-10 mb-8";

  return (
    <div className="flex bg-dark flex-row min-w-screen min-h-screen overflow-hidden">
      <div className="w-20 rounded py-4 items-center bg-grey flex flex-col">
        <Link className={linkClass} to="/">
          <AiOutlineClockCircle className="w-8 self-center bg-light rounded-lg  hover:bg-white ml-1 p-1 h-8" />
          <Text type="small" className="text-center mt-1">
            Play
          </Text>
        </Link>
        <Link className={linkClass} to="/profile">
          <AiOutlineUser className="w-8 self-center bg-light rounded-lg hover:bg-white ml-1 p-1 h-8" />
          <Text type="small" className="text-center mt-1">
            Profile
          </Text>
        </Link>

        <div className="flex-grow" />

        <Link className={linkClass} to="/settings">
          <AiOutlineSetting className="w-8 self-center bg-light rounded-lg hover:bg-white ml-1 p-1 h-8" />
          <Text type="small" className="text-center mt-1">
            Settings
          </Text>
        </Link>
        <Link className={linkClass} to="/faq">
          <AiOutlineQuestion className="w-8 self-center bg-light rounded-lg hover:bg-white ml-1 p-1 h-8" />
          <Text type="small" className="text-center mt-1">
            Help
          </Text>
        </Link>
      </div>

      <div className="w-screen h-screen">
        <Outlet />
      </div>
    </div>
  );
}
