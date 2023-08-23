import React from "react";

const LayoutAutentication = ({ children }) => {
  return (
    <>
      <section className="h-[99vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="hidden md:block bg-gradient-to-r from-[#169859] to-[#2ec70f9c] ">
            <div className="flex justify-center items-center h-full">
              <div className="w-10/12 text-center">
                {/* <img src={logo} alt="" /> */}
                <div>
                  <h1 className="text-[40px] text-white font-bold">
                    Selamat Datang
                  </h1>
                  <h1 className="text-[40px] text-white font-bold">
                    kembali !
                  </h1>
                </div>
                <div className="mt-5">
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, beatae minima hic aliquam perspiciatis eius suscipit
                    doloremque vitae error impedit tempora explicabo repellendus
                    ratione maxime nihil laborum cupiditate possimus. Debitis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-full p-5">
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default LayoutAutentication;
