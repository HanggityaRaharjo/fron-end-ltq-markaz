import React from "react";

const LayoutAutentication = ({ children }) => {
  return (
    <>
      <section className="h-[100vh] font-poppins ">
        <div className="grid grid-cols-1 lg:grid-cols-2  h-full ">
          <div className="bg-gradient-to-r from-[#169859] to-[#2ec70f9c] hidden md:block">
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
          <div className="flex md:from-white md:to-white justify-center items-center p-2 md:p-5 h-full bg-gradient-to-r from-[#169859] to-[#2ec70f9c]">
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default LayoutAutentication;
