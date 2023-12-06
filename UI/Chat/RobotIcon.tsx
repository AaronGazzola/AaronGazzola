const RobotIcon = ({ iconClassName = "" }: { iconClassName?: string }) => {
  return (
    <div className="relative w-6 h-6 overflow-visible">
      <svg
        className={`absolute w-full h-full stroke-none fill-gray-200 ${iconClassName}`}
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        data-name="025_SCIENCE"
        id="_025_SCIENCE"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs></defs>
        <path d="M9,15a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0v2A1,1,0,0,1,9,15Z" />
        <path d="M15,15a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0v2A1,1,0,0,1,15,15Z" />
        <path d="M6,8a1,1,0,0,1-.71-.29l-3-3A1,1,0,0,1,3.71,3.29l3,3a1,1,0,0,1,0,1.42A1,1,0,0,1,6,8Z" />
        <path d="M18,8a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l3-3a1,1,0,1,1,1.42,1.42l-3,3A1,1,0,0,1,18,8Z" />
        <path d="M21,20H3a1,1,0,0,1-1-1V14.5a10,10,0,0,1,20,0V19A1,1,0,0,1,21,20ZM4,18H20V14.5a8,8,0,0,0-16,0Z" />
      </svg>

      <svg
        className={`-z-10 absolute w-full h-full inset-0 stroke-none fill-gray-700 transform translate-y-[2px] ${iconClassName}`}
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        data-name="025_SCIENCE"
        id="_025_SCIENCE"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs></defs>
        <path d="M9,15a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0v2A1,1,0,0,1,9,15Z" />
        <path d="M15,15a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0v2A1,1,0,0,1,15,15Z" />
        <path d="M6,8a1,1,0,0,1-.71-.29l-3-3A1,1,0,0,1,3.71,3.29l3,3a1,1,0,0,1,0,1.42A1,1,0,0,1,6,8Z" />
        <path d="M18,8a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l3-3a1,1,0,1,1,1.42,1.42l-3,3A1,1,0,0,1,18,8Z" />
        <path d="M21,20H3a1,1,0,0,1-1-1V14.5a10,10,0,0,1,20,0V19A1,1,0,0,1,21,20ZM4,18H20V14.5a8,8,0,0,0-16,0Z" />
      </svg>
    </div>
  );
};

export default RobotIcon;
