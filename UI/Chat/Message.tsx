import RobotIcon from "./RobotIcon";
import UserIcon from "./UserIcon";

export enum Role {
  User = "user",
  Admin = "admin",
  AI = "AI",
}
const Message = ({ role }: { role: Role }) => {
  const isUser = role == Role.User;
  const isAdmin = role == Role.Admin;
  const isAI = role == Role.AI;
  return (
    <div className="w-full pb-10 pl-7 sm:pl-10">
      <div className="w-full">
        <div className="flex items-center">
          {isAI ? <RobotIcon /> : <UserIcon />}
          <h2 className="tracking-wider font-semibold text-lg sm:text-xl ml-3 text-gray-200 text-shadow-sm font-brand">
            {isAI ? "AI" : isAdmin ? "Aaron" : "You"}
          </h2>
        </div>
        <div className="relative">
          <hr className="border-gray-400 mt-0.5 mb-1" />
          <hr className="border-black opacity-10 absolute w-full top-[2px] -z-10" />
        </div>
      </div>
      <p className="text-base sm:text-lg font-medium tracking-wider text-shadow text-gray-300 pt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, enim
        ullam nam adipisci assumenda vel ab, illo sunt obcaecati provident omnis
        tempora maiores in eligendi? Consequatur hic molestiae sed ratione?
      </p>
    </div>
  );
};

export default Message;
