import { useState } from "react";
import ltq from "../assets/logo/LTQ.png"
import { Link } from "react-router-dom";

const StickyNavigation = () => {
  const [stickyNavStatus, setStickyNavStatus] = useState(false);
  return (
    <div className="fixed bottom-10 right-10">
      <div className="relative">
        <button
          className="w-12 h-12 bg-[#169859] hover:bg-[#169859E6] rounded-full  flex justify-center items-center active:scale-95 transition duration-150"
          onClick={() => setStickyNavStatus(!stickyNavStatus)}
        >
          <svg
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#000000"
            stroke="#000000"
            className="w-9"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>dot_grid_line</title>
              <g
                id="页面-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="System"
                  transform="translate(-528.000000, -288.000000)"
                  fillRule="nonzero"
                >
                  <g
                    id="dot_grid_line"
                    transform="translate(528.000000, 288.000000)"
                  >
                    <path
                      d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                      id="MingCute"
                      fillRule="nonzero"
                    ></path>
                    <path
                      d="M5.5,17 C6.32843,17 7,17.6716 7,18.5 C7,19.3284 6.32843,20 5.5,20 C4.67157,20 4,19.3284 4,18.5 C4,17.6716 4.67157,17 5.5,17 Z M12,17 C12.8284,17 13.5,17.6716 13.5,18.5 C13.5,19.3284 12.8284,20 12,20 C11.1716,20 10.5,19.3284 10.5,18.5 C10.5,17.6716 11.1716,17 12,17 Z M18.5,17 C19.3284,17 20,17.6716 20,18.5 C20,19.3284 19.3284,20 18.5,20 C17.6716,20 17,19.3284 17,18.5 C17,17.6716 17.6716,17 18.5,17 Z M5.5,10.5 C6.32843,10.5 7,11.1716 7,12 C7,12.8284 6.32843,13.5 5.5,13.5 C4.67157,13.5 4,12.8284 4,12 C4,11.1716 4.67157,10.5 5.5,10.5 Z M12,10.5 C12.8284,10.5 13.5,11.1716 13.5,12 C13.5,12.8284 12.8284,13.5 12,13.5 C11.1716,13.5 10.5,12.8284 10.5,12 C10.5,11.1716 11.1716,10.5 12,10.5 Z M18.5,10.5 C19.3284,10.5 20,11.1716 20,12 C20,12.8284 19.3284,13.5 18.5,13.5 C17.6716,13.5 17,12.8284 17,12 C17,11.1716 17.6716,10.5 18.5,10.5 Z M5.5,4 C6.32843,4 7,4.67157 7,5.5 C7,6.32843 6.32843,7 5.5,7 C4.67157,7 4,6.32843 4,5.5 C4,4.67157 4.67157,4 5.5,4 Z M12,4 C12.8284,4 13.5,4.67157 13.5,5.5 C13.5,6.32843 12.8284,7 12,7 C11.1716,7 10.5,6.32843 10.5,5.5 C10.5,4.67157 11.1716,4 12,4 Z M18.5,4 C19.3284,4 20,4.67157 20,5.5 C20,6.32843 19.3284,7 18.5,7 C17.6716,7 17,6.32843 17,5.5 C17,4.67157 17.6716,4 18.5,4 Z"
                      id="形状"
                      fill="#f3faf6"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <div
          className="absolute bg-white bg-opacity-70 backdrop-blur-sm bottom-14 flex flex-col right-0 w-56 rounded-lg shadow-lg   overflow-hidden transition-all duration-150"
          style={{
            maxHeight: stickyNavStatus ? "20rem" : "0rem",
            opacity: stickyNavStatus ? "1" : "0",
          }}
        >
          <Link to={''} className="p-2 hover:bg-gray-200 transition-all duration-200">LTQ</Link>
          <Link to={''} className="p-2 hover:bg-gray-200 transition-all duration-200">MDMQI</Link>
          <Link to={''} className="p-2 hover:bg-gray-200 transition-all duration-200">QSC</Link>
          <Link to={''} className="p-2 hover:bg-gray-200 transition-all duration-200">Kajian Tafsir</Link>
          <Link to={''} className="p-2 hover:bg-gray-200 transition-all duration-200">Mulazamah Akhwat</Link>
          <Link to={''} className="p-2 hover:bg-gray-200 transition-all duration-200">Santri Nusantara</Link>
          <Link to={''} className="p-2 hover:bg-gray-200 transition-all duration-200">Mukhoyyam</Link>
          <Link to={''} className="p-2 hover:bg-gray-200 transition-all duration-200">Markaz Alquran Akhwat</Link>

        </div>
      </div>
    </div>
  );
};

export default StickyNavigation;
