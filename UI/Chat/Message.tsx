import { Fragment } from "react";
import RobotIcon from "./RobotIcon";
import UserIcon from "./UserIcon";
import { Role } from "@/lib/constants";

const Message = ({
  message,
  role,
  isNew = false,
  isInitial = false,
}: {
  message: string[];
  role: Role;
  isNew?: boolean;
  isInitial?: boolean;
}) => {
  const isUser = role === Role.User;
  return (
    <div className="w-full pb-10 pl-7 sm:pl-10">
      <div className="w-full">
        <div className="flex items-center">
          {isUser ? <UserIcon /> : <RobotIcon />}
          <h2 className="tracking-wider font-semibold text-lg sm:text-xl ml-3 text-gray-200 text-shadow-sm font-brand">
            {isUser ? "You" : "AI"}
          </h2>
        </div>
        <div className="relative">
          <hr className="border-gray-400 mt-0.5 mb-1" />
          <hr className="border-black opacity-10 absolute w-full top-[2px] -z-10" />
        </div>
      </div>
      <div className="text-base sm:text-lg font-medium tracking-wider text-shadow text-gray-300 pt-1">
        {message.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
        {isInitial && (
          <ul className="list-disc list-inside mt-2">
            {[
              "Who is Aaron?",
              "Where can I find some of his work?",
              "What is his current availability?",
            ].map((text) => (
              <li
                key={text}
                className="rounded text-blue-300 hover:text-blue-600 cursor-pointer"
              >
                {text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Message;
