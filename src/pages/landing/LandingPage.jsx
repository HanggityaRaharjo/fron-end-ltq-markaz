import LayoutColumn from "../../layouts/LayoutColumn";
import yayasan from "../../assets/yayasan.jpg";

import foto1 from "../../assets/foto/foto1.png";
import foto2 from "../../assets/foto/foto2.png";
import foto3 from "../../assets/foto/foto3.png";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="w-[350px] h-[250px]shadow-md rounded-md py-2 border">
      <h1 className="text-lg font-semibold text-center">{props.title}</h1>
      <div className="flex justify-center  overflow-hidden py-5">
        <img src={props.image} alt="" className="h-[300px] w-[300px]" />
      </div>
      <div className="w-full  flex justify-center cursor-pointer hover:text-[#169859]">
        <Link className="w-3/4  text-center">
          <p className="">{props.label}</p>
        </Link>
      </div>
    </div>
  );
}

function CardBerita(props) {
  return (
    <div className="group h-[250px] w-[380px] bg-gray-200 relative flex items-end overflow-hidden cursor-pointer shadow-md">
      <img src={props.image} alt="" className="h-full w-full object-cover" />
      <div className="absolute w-full bg-white bg-opacity-50 backdrop-blur-sm py-5 translate-y-24 group-hover:block group-hover:translate-y-0 transition">
        <h1 className="text-[16px] font-medium px-2">{props.title}</h1>
      </div>
    </div>
  );
}

const LandingPage = () => {
  return (
    <LayoutColumn>
      <div className="font-poppins overflow-hidden">
        {/* jumbotron */}
        <section className="md:py-32 flex justify-center bg-[#f1fff8]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:hidden">
                <div className="flex justify-center ">
                  <div className="w-[400px] h-[400px]">
                    <img
                      src="/animate/filing-system-animate.svg"
                      alt=""
                      className="h-[500px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="md:w-3/4 px-5">
                  <div className="w-20 h-20 hidden md:block">
                    <img
                      src={"/image/MARKAZ.png"}
                      alt=""
                      className="h-full w-full "
                    />
                  </div>
                  <h1 className="text-[40px] font-bold py-5">
                    Selamat Datang asd di MARKAZ ALQURAN
                  </h1>
                  <p className="py-2 text-[20px] font-semibold">
                    Menyempurnakan Hafalan Alquran Anda Bersama Kami.
                  </p>
                  <p className="pt-2">
                    Bersama kami, Anda akan menemukan metode tahfidz Alquran
                    yang efektif dan terpercaya. Bergabunglah dengan komunitas
                    kami yang berdedikasi untuk memperdalam penghafalan dan
                    pemahaman Alquran.
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

        <div className="relative h-40 overflow-hidden">
          <div class="custom-shape-divider-top-1694182034">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        {/* Content */}
        <section className="py-[100px] px-5 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-5 flex justify-center">
              <div className=" py-10 md:h-[600px]  relative h-full">
                <h1 className="font-bold text-[22px]   md:text-[32px]">
                  Kenapa harus{" "}
                  <span className="text-[#169859]"> Markaz AlQuran?</span>
                </h1>
                <p className="pt-2">
                  Bersama kami, Anda akan menemukan metode tahfidz Alquran yang
                  efektif dan terpercaya. Bergabunglah dengan komunitas kami
                  yang berdedikasi untuk memperdalam penghafalan dan pemahaman
                  Alquran, kami juga menggunakan teknologi terkini untuk
                  memudahkan pembelajaran Anda. Mulai dari aplikasi web hingga
                  platform online yang interaktif, kami berkomitmen untuk
                  memberikan pengalaman pembelajaran yang terbaik.
                </p>
              </div>

              <div className="absolute w-[600px] h-[600px]  left-0 bottom-56  hidden md:block">
                <img
                  src="/image/image1.png"
                  alt=""
                  className="w-full h-full "
                />
              </div>
            </div>
            <div className="p-5 flex flex-col justify-center items-center ">
              <div className="h-[280px] w-[290px] scale-150 overflow-hidden ">
                <img
                  src={"/image/MARKAZ.png"}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="py-10 md:h-[500px] ">
                <h1 className="font-bold text-[22px] md:text-[32px]">
                  Mengapa Hafalan AlQuran Penting?{" "}
                  <span className="text-[#169859]"> Penting?</span>
                </h1>
                <p className="pt-2">
                  Hafalan Alquran adalah salah satu ibadah yang paling dihormati
                  dalam Islam. Ini adalah cara terbaik untuk menjaga firman
                  Allah dalam hati dan pikiran Anda sepanjang hidup Anda.
                  Bergabunglah dengan kami untuk memulai perjalanan Anda menuju
                  hafalan Alquran yang kokoh dan bermakna.
                </p>
              </div>
              <div className="">
                <h1 className="font-bold text-[22px]  md:text-[32px]">
                  Misi Markaz AlQuran
                </h1>
                <p className="pt-2">
                  1. Melahirkan generasi yang memiliki aqidah yang kuat,
                  pemahaman islam yang benar dan berakhlaq mulia<br></br>
                  2. Mewujudkan generasi yang cerdas dan kreatif, tangguh dan
                  mandiri, peduli dan bertanggung jawab melalui proses
                  pendidikan yang terpadu, seimbang<br></br>
                  3. Mengembangkan potensi siswa berdasarkan qur'an
                  <br></br>
                  4. Melaksanakan pembelajaran yang qur'ani<br></br>
                  5. Membangun generasi qur'an yang tartil dalam membacanya,
                  benar dalam mentadabburinya.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End Content */}
        <div className="w-full relative h-40">
          <div class="custom-shape-divider-bottom-1694190985">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>

        {/* Berita */}
        <section className=" pt-{200px} bg-[#cafee6] relative overflow-hidden">
          <div className=" relative py-[300px] bg-[#008169]">
            <div class="custom-shape-divider-top-1694191071">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
            <div className="flex justify-center">
              <div>
                <h1 className="text-[32px] font-semibold text-white">
                  Metode Pembelajaran
                </h1>
                <div className="flex items-center justify-center gap-2">
                  <div className="bg-white  h-[2px] w-[40px]" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <div className="bg-white h-[2px] w-[40px]" />
                </div>
              </div>
            </div>

            <div className="">
              <div className="mt-10 flex justify-center">
                <div className="grid grid-cols-1 gap-5 items-center md:grid-cols-2 lg:grid-cols-3">
                  <div className="">
                    <CardBerita
                      title={"berita terkini tentang yayasan"}
                      image={yayasan}
                    />
                  </div>
                  <div>
                    <CardBerita
                      title={"Lorem ipsum dolor sit amet consectetur."}
                      image={yayasan}
                    />
                  </div>
                  <div>
                    <CardBerita
                      title={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sequi!"
                      }
                      image={yayasan}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inberita-shape-divider-bottom-1694190687 relative">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="absolute w-[2000px] "
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </section>
        {/* end Berita */}

        {/* info Cabang */}
        <section className="py-[100px] px-5">
          <div className="flex justify-center">
            <h1 className="text-2xl text-center font-semibold">
              Berita Terkini
            </h1>
          </div>
          {/* card */}
          <div className="flex justify-center py-10 ">
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
                label={"Kami memberi beasiswa penuh untuk para santri"}
                image={foto3}
              />
            </div>
          </div>
          <div className="flex justify-center w-full ">
            <button className="bg-[#169859] text-[#f3faf6] p-2 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
              <span>Daftar Sekarang</span>
            </button>
          </div>
        </section>
        {/* end Info cabang */}
      </div>
    </LayoutColumn>
  );
};

export default LandingPage;
