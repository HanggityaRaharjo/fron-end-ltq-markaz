import React from "react";
import NavLanding from "../layouts/NavLanding";
import Footer from "../layouts/Footer";

function TentangKami() {
  return (
    <>
      <NavLanding />
      <section className="pt-20">
        <div className="flex justify-center items-center h-[50vh]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
              <div className="flex justify-center md:hidden">
                <div className="w-[500px] h-[500px] bg-gray-300"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-[500px]">
                  <h1 className="text-[40px] font-bold">Tentang Kami</h1>
                  <p className="text-[20px] font-semibold py-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam, tempore.
                  </p>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                    commodi temporibus veritatis iusto sed. Enim, soluta
                    sapiente ratione maiores repudiandae suscipit ab nesciunt
                    aut ducimus in quo veniam modi fugiat!
                  </p>
                </div>
              </div>
              <div className="hidden md:flex justify-center pt-10">
                <div className="w-[500px] h-[500px] bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40">
          <div className="flex justify-start pl-20">
            <div className="">
              <h1 className="text-[50px] font-extrabold relative pl-20">
                The <span className="absolute top-10">Founder</span>
              </h1>
              <div className="grid grid-cols-2 lg:grid-cols-4">
                <div className="h-[250px] w-[250px] bg-gray-300"></div>
                <div className="h-[250px] w-[250px] bg-gray-400"></div>
                <div className="h-[250px] w-[250px] bg-gray-300"></div>
                <div className="h-[250px] w-[250px] bg-gray-400"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-end pr-20 mt-10">
            <div className="">
              <h1 className="flex justify-end relative pr-48 text-[50px] font-extrabold">
                Our <span className="absolute top-10 right-1">Founder</span>
              </h1>
              <div className="grid grid-cols-2 lg:grid-cols-4">
                <div className="h-[250px] w-[250px] bg-gray-300"></div>
                <div className="h-[250px] w-[250px] bg-gray-400"></div>
                <div className="h-[250px] w-[250px] bg-gray-300"></div>
                <div className="h-[250px] w-[250px] bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}

export default TentangKami;
