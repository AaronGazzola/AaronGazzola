import RobotIcon from "./RobotIcon";
import UserIcon from "./UserIcon";
import { Role } from "@/lib/constants";

const Message = ({
  message,
  role,
  isNew = false,
}: {
  message: string[];
  role: Role;
  isNew?: boolean;
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
      <p className="text-base sm:text-lg font-medium tracking-wider text-shadow text-gray-300 pt-1">
        {message.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </p>
    </div>
  );
};

export default Message;
