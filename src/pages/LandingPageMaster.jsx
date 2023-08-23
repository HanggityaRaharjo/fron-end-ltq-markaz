import React from "react";
import LayoutColumn from "../layouts/LayoutColumn";
import yayasan from "../assets/yayasan.jpg";
import markaz from "../assets/logo/MARKAZ.PNG"
import foto1 from "../assets/foto/foto1.png";
import foto2 from "../assets/foto/foto2.png";
import foto3 from "../assets/foto/foto3.png";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="w-[400px] shadow-md rounded-md py-2 border">
      <h1 className="text-lg font-semibold text-center">{props.title}</h1>
      <div className="flex justify-center h-[300px] w-full overflow-hidden py-5">
        <img src={props.image} alt="" className="h-full" />
      </div>
      <div className="w-full  flex justify-center cursor-pointer hover:text-blue-300">
        <Link className="w-3/4  text-center">
          <p className="">{props.label}</p>
        </Link>
      </div>
    </div>
  );
}

function CardBerita(props) {
  return (
    <div className="group h-[250px] w-[400px] bg-gray-200 relative flex items-end overflow-hidden cursor-pointer">
      <img src={props.image} alt="" className="h-full w-full" />
      <div className="absolute w-full bg-white bg-opacity-50 backdrop-blur-sm py-5 translate-y-24 group-hover:block group-hover:translate-y-0 transition">
        <h1 className="text-[16px] font-medium px-2">{props.title}</h1>
      </div>
    </div>
  );
}

function LandingPageMaster() {
  return (
    <LayoutColumn>
      <div className="font-poppins">
        {/* jumbotron */}
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
                  <div className="w-20 h-20">
                    <img src={markaz} alt="" className="h-full w-full " />
                  </div>
                  <h1 className="text-[40px] font-bold py-5">Selamat Datang di MARKAZ ALQURAN</h1>
                  <p className="py-2 text-[20px] font-semibold">
                    Menyempurnakan Hafalan Alquran Anda Bersama Kami.
                  </p>
                  <p>
                    Bersama kami, Anda akan menemukan metode tahfidz Alquran yang efektif dan terpercaya. Bergabunglah dengan komunitas kami yang berdedikasi untuk memperdalam penghafalan dan pemahaman Alquran.
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
        {/* end Jumbotron */}

        {/* Content */}
        <section className="py-10">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-5">
              <div className="flex justify-center">
                <div className="h-[400px] w-[400px] flex">
                  <img src={markaz} alt="" className="h-full w-full" />
                </div>
              </div>
              <div className="flex justify-center sm:p-5 lg:w-3/4">
                <div className="">
                  <h1 className="text-xl font-bold mb-2">
                    Kenapa harus Markaz AlQuran?
                  </h1>
                  <p className="text-justify">
                    Bersama kami, Anda akan menemukan metode tahfidz Alquran yang efektif dan terpercaya. Bergabunglah dengan komunitas kami yang berdedikasi untuk memperdalam penghafalan dan pemahaman Alquran, kami juga menggunakan teknologi terkini untuk memudahkan pembelajaran Anda. Mulai dari aplikasi web hingga platform online yang interaktif, kami berkomitmen untuk memberikan pengalaman pembelajaran yang terbaik.
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="mt-5">
                      <h1 className="text-xl font-bold mb-2">
                        Mengapa Hafalan AlQuran Penting?
                      </h1>
                      <p className="text-justify">
                        Hafalan Alquran adalah salah satu ibadah yang paling dihormati dalam Islam. Ini adalah cara terbaik untuk menjaga firman Allah dalam hati dan pikiran Anda sepanjang hidup Anda. Bergabunglah dengan kami untuk memulai perjalanan Anda menuju hafalan Alquran yang kokoh dan bermakna.
                      </p>
                    </div>
                    <div className="mt-5">
                      <h1 className="text-xl font-bold mb-2">
                        Misi Markaz AlQuran
                      </h1>
                      <p className="text-justify">
                        1. Melahirkan generasi yang memiliki aqidah yang kuat, pemahaman islam yang benar dan berakhlaq mulia<br></br>
                        2. Mewujudkan generasi yang cerdas dan kreatif, tangguh dan mandiri, peduli dan bertanggung jawab melalui proses pendidikan yang terpadu, seimbang<br></br>
                        3. Mengembangkan potensi siswa berdasarkan qur’an<br></br>
                        4. Melaksanakan pembelajaran yang qur’ani<br></br>
                        5. Membangun generasi qur’an yang tartil dalam membacanya, benar dalam mentadabburinya.<br></br>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Content */}

        {/* Berita */}
        <section className="mt-10">
          <div className="flex justify-center">
            <div>
              <h1 className="text-[20px] font-semibold">Metode Pembelajaran</h1>
              <div className="flex items-center justify-center gap-2">
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
          <div className="mt-10 px-5 flex justify-center">
            <div className="grid grid-cols-1 gap-5 items-center md:grid-cols-2 lg:grid-cols-3">
              <CardBerita
                title={"berita terkini tentang yayasan"}
                image={yayasan}
              />
              <CardBerita
                title={"Lorem ipsum dolor sit amet consectetur."}
                image={yayasan}
              />
              <CardBerita
                title={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sequi!"
                }
                image={yayasan}
              />
            </div>
          </div>
        </section>
        {/* end Berita */}

        {/* info Cabang */}
        <section className="mt-20 py-20">
          <div className="flex justify-center">
            <h1 className="text-2xl text-center font-semibold w-[500px]">
              Berita Terkini
            </h1>
          </div>
          {/* card */}
          <div className="flex justify-center py-10 mx-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <Card
                title={"Kajian Keluarga"}
                label={
                  "MEMBANGUN KETAHANAN KELUARGA BERPONDASI QURAN DAN SUNNAH"
                }
                image={foto1}
              />
              <Card
                title={"Kajian Keluarga"}
                label={
                  "Membangun Ketahanan Keluarga Berpondasi Quran dan Sunnah"
                }
                image={foto2}
              />
              <Card
                title={"Beasiswa Santri"}
                label={
                  "Kami memberi beasiswa penuh untuk para santri"
                }
                image={foto3}
              />
            </div>
          </div>
          <div className="flex justify-center ">
            <button className="bg-[#169859] text-[#f3faf6] p-2 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
              <span>Daftar Sekarang</span>
            </button>
          </div>
        </section>
        {/* end Info cabang */}
      </div>
    </LayoutColumn>
  );
}

export default LandingPageMaster;
