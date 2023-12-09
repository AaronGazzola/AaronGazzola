import RobotIcon from "./RobotIcon";
import UserIcon from "./UserIcon";
import { Question, Role } from "@/lib/constants";

const Message = ({
  message,
  role,
  isNew = false,
  isInitial = false,
  onSelectQuestion,
}: {
  message: string[];
  role: Role;
  isNew?: boolean;
  isInitial?: boolean;
  onSelectQuestion?: (question: Question) => void;
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
      <div className="text-base sm:text-lg font-medium tracking-wider text-shadow text-gray-300 pt-1 space-y-3">
        {message.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
        {isInitial && (
          <ul className="list-disc list-inside mt-2">
            {Object.values(Question).map((question) => (
              <li
                key={question}
                onClick={() => onSelectQuestion?.(question)}
                className="rounded text-blue-300 hover:text-blue-600 cursor-pointer"
              >
                {question === Question.About && "Who is Aaron?"}
                {question === Question.Porfiolio &&
                  "Where can I find some of his work?"}
                {question === Question.Availability &&
                  "What is his current availability?"}
                {question === Question.Reviews &&
                  "What do people say about his work?"}
                {question === Question.Contact && "How can I contact him?"}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Message;
