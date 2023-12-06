import RobotIcon from "./RobotIcon";

enum Role {
  User = "user",
  Admin = "admin",
  AI = "AI",
}
const Message = ({ role }: { role: Role }) => {
  const isUser = role == Role.User;
  const isAdmin = role == Role.Admin;
  const isAI = role == Role.AI;
  return (
    <div className="text-white w-full relative">
      <div className="relative w-full">
        <div className="flex">
          {<RobotIcon />}
          <h2 className="expanded font-semibold text-sm  ml-2 text-gray-200 text-shadow-sm">
            AI
          </h2>
        </div>
        <div className="relative">
          <hr className="border-gray-400 mt-0.5 mb-1" />
          <hr className="border-black opacity-10 absolute w-full top-[2px] -z-10" />
        </div>
      </div>
      <p className="font-medium tracking-wide text-shadow ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, enim
        ullam nam adipisci assumenda vel ab, illo sunt obcaecati provident omnis
        tempora maiores in eligendi? Consequatur hic molestiae sed ratione?
      </p>
    </div>
  );
};

export default Message;
