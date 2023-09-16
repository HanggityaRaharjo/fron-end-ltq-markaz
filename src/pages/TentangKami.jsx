import React from "react";
import LayoutColumn from "../layouts/LayoutColumn";
import markaz from "../assets/logo/MARKAZ.png";
import founder from "../assets/founder/founder.jpg";

function TentangKami() {
  return (
    <>
      <LayoutColumn>
        <section className="py-[80px]">
          <div className="flex justify-center items-center">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
                <div className="flex justify-center md:hidden">
                  <div className="w-[400px] h-[400px]">
                    <img src="/assets/image/world.png" alt="" />
                  </div>
                </div>
                <div className="flex justify-center px-5">
                  <div className="w-[500px]">
                    <h1 className="text-[40px] font-bold">Tentang Kami</h1>
                    <p className="text-[20px] font-semibold py-5">
                      Yayasan Markaz AlQuran Indonesia.
                    </p>
                    <p className="text-left">
                      Selamat datang di Lembaga Tahfidz Alquran, sebuah lembaga yang berkomitmen untuk membantu Anda dalam perjalanan memahami dan menghafal Alquran. Kami didirikan dengan tujuan mulia untuk memfasilitasi pembelajaran Alquran yang efektif, berfokus pada pemahaman yang mendalam dan hafalan yang kokoh. Kami adalah rumah bagi para pencari ilmu Alquran, baik anak-anak maupun dewasa.s
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex justify-center pt-10">
                  <div className="w-[600px] h-[600px] ">
                    <img src="/assets/image/world.png" alt="" className="scale-125" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-[80px]">
            <div className="flex justify-center">
              <div className="">
                <h1 className="text-[50px] font-extrabold relative">
                  The <span className="absolute top-10 left-0">Founder</span>
                </h1>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                  <div className="h-[250px] w-[250px] overflow-hidden">
                    <img src={founder} alt="" className="h-full object-cover" />
                  </div>
                  <div className="h-[250px] w-[250px]">
                    <div className="flex flex-col justify-center h-full p-5">
                      <label>
                        Aep Saepudim M.Ag
                      </label>
                      <p className="text-gray-400">cxasc</p>
                    </div>
                  </div>
                  <div className="h-[250px] w-[250px] overflow-hidden">
                    <img src={founder} alt="" className="h-full object-cover" />
                  </div>
                  <div className="h-[250px] w-[250px]">
                    <div className="flex flex-col justify-center h-full p-5">
                      <label>
                        Entis Sutisna M.Ag
                      </label>
                      <p className="text-gray-400">slakjb</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-start">
              <div className="">
                {/* <h1 className="flex justify-end relative text-[50px] font-extrabold">
                  Our <span className="absolute top-10 right-1">Founder</span>
                </h1> */}
                <div className="grid grid-cols-2 lg:grid-cols-4">
                  <div className="h-[250px] w-[250px] ">
                    <div className="flex flex-col justify-center h-full p-5">
                      <label>
                        Ervan Herdiansyah S.T
                      </label>
                      <p className="text-gray-400">alsjc</p>
                    </div>
                  </div>
                  <div className="h-[250px] w-[250px] overflow-hidden">
                    <img src={founder} alt="" className="h-full object-cover" />
                  </div>
                  <div className="h-[250px] w-[250px] ">
                    <div className="flex flex-col justify-center h-full p-5">
                      <label>
                        Hanggitya Raharjo S.T. M.Ag
                      </label>
                      <p className="text-gray-400">aslkcn</p>
                    </div>
                  </div>
                  <div className="h-[250px] w-[250px] overflow-hidden">
                    <img src={founder} alt="" className="h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutColumn>
    </>
  );
}

export default TentangKami;
