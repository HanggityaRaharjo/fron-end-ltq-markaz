import React from "react";

const Badge = ({ variant, text }) => {
  if (variant == "success") return <BadgeSuccess text={text} />;
  if (variant == "warning") return <BadgeWarning text={text} />;
  if (variant == "error") return <BadgeError text={text} />;
};

const BadgeSuccess = ({ text }) => {
  return (
    <div className="flex justify-center w-fit h-fit">
      <div className="bg-[#eaf7ee] min-w-[100px] rounded-full border justify-center flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-[#23ae5b]"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-medium">{text}</span>
      </div>
    </div>
  );
};
const BadgeWarning = ({ text }) => {
  return (
    <div className="flex justify-center w-fit h-fit">
      <div className="bg-[#fff8ee] min-w-[100px] rounded-full border justify-center flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-[#f69640]"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-medium">{text}</span>
      </div>
    </div>
  );
};
const BadgeError = ({ text }) => {
  return (
    <div className="flex justify-center w-fit h-fit">
      <div className="bg-[#fff8ee] min-w-[100px] rounded-full border justify-center flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-[#f69640]"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-medium">{text}</span>
      </div>
    </div>
  );
};

export default Badge;
