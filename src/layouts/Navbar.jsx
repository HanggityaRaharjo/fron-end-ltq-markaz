import { useEffect, useState } from "react";

const Navbar = ({ sidebarStatus, HandleSidebar }) => {
  const [dropdownShow, setDropdownShow] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <nav className="fixed  w-full flex justify-center z-[999]">
      <div
        className="max-w-7xl  w-full h-20 py-2 transition-all duration-150"
        style={{ paddingLeft: sidebarStatus ? "224px" : "0px" }}
      >
        <div className="flex items-center h-full px-5 bg-white bg-opacity-70 backdrop-blur-sm shadow-lg rounded-full justify-between relative ">
          <button
            className="hover:text-[#169859]"
            onClick={() => HandleSidebar(!sidebarStatus)}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-current stroke-2 fill-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownShow(!dropdownShow)}
                className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                <span>Jhon Doe</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-current stroke-2 fill-none transition duration-150"
                  style={{
                    transform: dropdownShow ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                className="absolute top-[52px] right-0 rounded-xl px-2 justify-around overflow-hidden bg-white shadow-lg w-56 flex flex-col transition-all duration-150"
                style={{ maxHeight: dropdownShow ? "200px" : "0px" }}
              >
                <button className="text-[#169859] font-semibold my-1 py-2 px-4 bg-[#effff7] w-full rounded-full">
                  Profile
                </button>
                <button className="text-[#169859] font-semibold my-1 py-2 px-4 bg-[#effff7] w-full rounded-full">
                  Profile
                </button>
                <button className="text-[#169859] font-semibold my-1 py-2 px-4 bg-[#effff7] w-full rounded-full">
                  Profile
                </button>
                <button className="text-[#169859] font-semibold my-1 py-2 px-4 bg-[#effff7] w-full rounded-full">
                  Profile
                </button>
              </div>
            </div>
            {/* End Dropdown */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
