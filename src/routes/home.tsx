import { useEffect, useState } from "react";
import { socket } from "../helpers/socket";
import { setInterval } from "worker-timers";

export default function Home() {
  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      let delay = 0;
      setInterval(() => {
        const start = Date.now();
        socket.emit("ping", () => {
          delay = Date.now() - start;
        });
        socket.emit("userData", {
          name: "Quark Maestro",
          type: "host",
          battery: "-",
          charging: false,
          delay: delay,
        });
      }, 1000);
    });
    socket.on("connection", () => {
      console.log("Connected to server2");
    });
    socket.on("user-connected", (msg: any) => {
      let _msg = msg.filter((user: any) => user?.type);
      console.log(_msg);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col bg-dark justify-start h-full w-full">
      Hello world
    </div>
  );
}
