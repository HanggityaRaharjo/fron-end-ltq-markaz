import React from "react";
import NavLanding from "../layouts/NavLanding";
import logo from "../../public/ltq-logo.png";
import Footer from "../layouts/Footer";
import LayoutColumn from "../layouts/LayoutColumn";

function Card(props) {
  return (
    <div className="w-[200px]">
      <h1 className="text-lg font-semibold">{props.title}</h1>
      <div className="h-[200px] w-[200px] bg-gray-200"></div>
      <p className="w-[200px]">{props.label}</p>
    </div>
  );
}

function LandingPageMaster() {
  return (
    <LayoutColumn>
      <section className="pt-32 flex justify-center bg-[#cafee6] rounded-bl-full">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:hidden">
              <div className="flex justify-center ">
                <div className="md:hidden">
                  <img
                    src="/animate/filing-system-animate.svg"
                    alt=""
                    className="h-[500px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-3/4 ">
                <div className="">
                  <img src={logo} alt="" className="h-6 " />
                </div>
                <h1 className="text-[40px] font-bold py-5">MARKAZ LTQ</h1>
                <p className="py-2 text-[20px] font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Provident, voluptates?
                </p>
                <button className="my-10 bg-[#169859] h-12 w-32 rounded-full p-2 hover:bg-[#1aaf67]">
                  <span className="text-white">Bergabung</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="hidden md:block">
                <img
                  src="/animate/filing-system-animate.svg"
                  alt=""
                  className="h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex justify-center items-center">
              <div className="h-[400px] w-[400px] bg-slate-200"></div>
            </div>
            <div className="flex justify-center sm:p-5">
              <div className="">
                <h1 className="text-xl font-bold mb-2">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
                <p className="text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatum molestiae sunt reiciendis a laudantium aliquam
                  sequi aspernatur numquam alias debitis officiis magnam quia,
                  reprehenderit atque hic ab fuga accusantium, eius corporis
                  odio repudiandae? A molestias veniam quae, adipisci culpa vero
                  excepturi, possimus quas error voluptatibus illum incidunt
                  voluptates reprehenderit. Optio?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="mt-5">
                    <h1 className="text-xl font-bold mb-2">
                      Lorem ipsum dolor sit amet consectetur.
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde porro deserunt ea vero beatae officiis necessitatibus
                      et! Veniam nihil laborum accusantium aliquam, ullam
                      molestiae deleniti ex aliquid neque impedit eos optio,
                      dolor labore suscipit doloremque, corporis nulla pariatur
                      at enim consectetur expedita quos. Debitis dolores illo
                      fugiat cum voluptate atque, alias laboriosam placeat,
                      praesentium veniam rerum. Non iusto, corporis dicta
                      asperiores quas cumque adipisci placeat. Eius provident at
                      vero illo.
                    </p>
                  </div>
                  <div className="mt-5">
                    <h1 className="text-xl font-bold mb-2">
                      Lorem ipsum dolor sit amet consectetur.
                    </h1>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde porro deserunt ea vero beatae officiis necessitatibus
                      et! Veniam nihil laborum accusantium aliquam, ullam
                      molestiae deleniti ex aliquid neque impedit eos optio,
                      dolor labore suscipit doloremque, corporis nulla pariatur
                      at enim consectetur expedita quos. Debitis dolores illo
                      fugiat cum voluptate atque, alias laboriosam placeat,
                      praesentium veniam rerum. Non iusto, corporis dicta
                      asperiores quas cumque adipisci placeat. Eius provident at
                      vero illo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex justify-center">
          <div>
            <h1 className="text-[20px] font-semibold">Berita Terkini</h1>
            <div className="flex items-center gap-2">
              <div className="bg-gray-300 h-[2px] w-[40px]" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>

              <div className="bg-gray-300 h-[2px] w-[40px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="mt-10 px-52">
          <div className="grid grid-cols-1 gap-5 items-center md:grid-cols-2 lg:grid-cols-3">
            <div className=" h-40 bg-gray-200 relative flex items-end">
              <h2 className="bottom-0">Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className=" h-40 bg-gray-200 relative flex items-end">
              <h2 className="bottom-0">Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className=" h-40 bg-gray-200 relative flex items-end">
              <h2 className="bottom-0">Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className=" h-40 bg-gray-200 relative flex items-end">
              <h2 className="bottom-0">Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className=" h-40 bg-gray-200 relative flex items-end">
              <h2 className="bottom-0">Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className=" h-40 bg-gray-200 relative flex items-end">
              <h2 className="bottom-0">Lorem ipsum dolor sit amet.</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 py-20">
        <div className="flex justify-center">
          <h1 className="text-2xl text-center font-semibold w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            ducimus. Lorem ipsum dolor sit amet.
          </h1>
        </div>
        {/* card */}
        <div className="flex justify-center py-10">
          <div className="grid grid-cols-3 gap-5">
            <Card
              title={"orem ipsum dolor sit"}
              label={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit   Quisquam, ratione!"
              }
            />
            <Card
              title={"orem oienc cknkvht"}
              label={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit   Quisquam, ratione!"
              }
            />
            <Card
              title={"cmem caneinc chbajne"}
              label={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit   Quisquam, ratione!"
              }
            />
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="bg-[#169859] text-[#f3faf6] p-2 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
            <span>Daftar Sekarang</span>
          </button>
        </div>
      </section>
    </LayoutColumn>
  );
}

export default LandingPageMaster;
