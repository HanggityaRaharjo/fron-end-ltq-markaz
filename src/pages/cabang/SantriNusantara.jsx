import React from "react";
import LayoutColumn from "../../layouts/LayoutColumn";
import santri from "../../assets/logo/santri.png";
import education from "../../assets/education.svg";

function Card({ img, title, label }) {
  return (
    <div className="flex justify-center border bg-white rounded-md p-2 border-gray-200 hover:shadow-md  hover:scale-105 transition-all duration-200">
      <div className="w-10/12 lg:w-full">
        <div className="h-[200px] border w-full overflow-hidden">
          <img src={img} alt="" className="h-full w-full object-cover" />
        </div>
        <h1 className="text-[17px] py-2 font-semibold text-justify">{title}</h1>
        <div className="">{label}</div>
      </div>
    </div>
  );
}

function SantriNusantara() {
  return (
    <LayoutColumn>
      <section className="flex justify-center">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center py-20 bg-[#f1fff8] ">
            <div className="w-full flex justify-center">
              <div className="w-[500px]">
                <img src={santri} alt="" className="w-full" />
              </div>
            </div>
            <div className=" flex justify-center md:justify-start mt-5 md:mt-0">
              <div className="text-right w-10/12 md:w-9/12 ">
                <div
                  className="text-[40px] text-end font-bold mb-2"
                  style={{ lineHeight: 1 }}
                >
                  <h1>Santri</h1>
                  <h1>Nusantara</h1>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam doloremque iste quia vero est perferendis magnam
                  libero ipsam. Dolore, fugiat?
                </p>
                <button className="mt-10 bg-[#169859] p-2 text-white rounded-full">
                  <span className="text-[12px]">Dafftar Sekarang</span>
                </button>
              </div>
            </div>
          </div>

          <div className="relative py-10">
            <div class="custom-shape-divider-top-1694200175">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
              </svg>
            </div>
          </div>

          <div className="mt-20 flex justify-center py-10 px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:w-10/12 md:gap-5 lg:w-7/12">
              {/* image */}
              <div className="">
                <div className="flex justify-center lg:h-[600px]">
                  <div className="w-[400px] h-[380px]">
                    <img src={education} alt="" className="h-full w-full" />
                  </div>
                </div>
                <div className="w-full flex justify-center items-center py-10 px-5 bg-[#cafee6] rounded-md ">
                  <div className="flex justify-center lg:justify-start">
                    <div className="flex flex-col gap-2">
                      <h1 className="font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                        mollitia?
                      </h1>
                      <p>
                        Cabang Markaz Quran adalah bagian penting dari jaringan Lembaga Markaz Quran yang sudah dikenal secara luas di seluruh dunia. Kami berkomitmen untuk menyediakan pendidikan Alquran berkualitas tinggi dan memahaminya dengan mendalam. Dengan pengalaman bertahun-tahun dalam mengajar dan memahami Alquran, kami adalah mitra terpercaya dalam perjalanan spiritual dan intelektual Anda.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-[100px]">
                </div>
                <div className=" md:hidden flex justify-center lg:h-[500px]">
                  <div className="w-[400px] h-[380px] flex justify-end">
                    <img src={education} alt="" className="h-full" />
                  </div>
                </div>
                <div className="w-full flex justify-center items-center py-10 px-5 bg-[#cafee6] rounded-md ">
                  <div className="flex justify-center lg:justify-start">
                    <div className="flex flex-col gap-2">
                      <h1 className="font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                        mollitia?
                      </h1>
                      <p>
                        Cabang Markaz Quran adalah bagian penting dari jaringan Lembaga Markaz Quran yang sudah dikenal secara luas di seluruh dunia. Kami berkomitmen untuk menyediakan pendidikan Alquran berkualitas tinggi dan memahaminya dengan mendalam. Dengan pengalaman bertahun-tahun dalam mengajar dan memahami Alquran, kami adalah mitra terpercaya dalam perjalanan spiritual dan intelektual Anda.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex justify-center lg:h-[500px]">
                  <div className="w-[400px] h-[380px] flex justify-end">
                    <img src={education} alt="" className="h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="mt-20  rounded-br-full">
            <div className="flex justify-center">
              <div>
                <h1 className="text-center text-[20px] font-semibold">
                  Program
                </h1>
                <div className="flex items-center  justify-center gap-3">
                  <div className="h-[1px] w-[25px] bg-gray-200" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>

                  <div className="h-[1px] w-[20px] bg-gray-200" />
                </div>
              </div>
            </div>
            <div>
              {/* card */}
              <div className="flex justify-center pt-5 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  <Card
                    img={'/assets/card/image1.png'}
                    title={"Tahsin Reguler"}
                    label={
                      "Tujuan utama dari tahsin reguler adalah untuk membantu individu meningkatkan kualitas bacaan dan pelafalan mereka ketika membaca Quran."
                    }
                  />
                  <Card
                    img={'/assets/card/image4.png'}
                    title={"Tartil"}
                    label={
                      "Tartil adalah istilah dalam bahasa Arab yang merujuk pada cara membaca Quran dengan lambat, tenang, dan dengan memperhatikan aturan-aturan tajwid. Ini adalah salah satu cara yang dianjurkan untuk membaca Quran agar memahami dan merenungkan maknanya dengan baik."
                    }
                  />
                  <Card
                    img={'/assets/card/image2.png'}
                    title={"Talaqqi"}
                    label={
                      "Talaqqi adalah istilah dalam bahasa Arab yang merujuk pada metode atau praktik penghafalan Quran dalam tradisi Islam. Ini adalah salah satu cara tradisional untuk menghafal teks Quran dengan memanfaatkan metode lisan dan mendengarkan"
                    }
                  />
                  <Card
                    img={'/assets/card/image3.png'}
                    title={"Keluarga Qurani"}
                    label={
                      "Keluarga Qurani adalah istilah yang digunakan untuk merujuk kepada keluarga yang hidup berdasarkan nilai-nilai, ajaran-ajaran, dan praktik-praktik yang diilhami oleh Quran, kitab suci dalam Islam."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutColumn>
  );
}

export default SantriNusantara;
