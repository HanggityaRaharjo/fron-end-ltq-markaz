import React from "react";
import LayoutColumn from "../../layouts/LayoutColumn";
import education from "../../assets/education.svg";
import yayasan from "../../assets/yayasan.jpg";
import ltq from "../../assets/logo/LTQ.png";


function Card({ img, title, label }) {
  return (
    <div className="flex justify-center">
      <div className="w-10/12 lg:w-full">
        <img src={img} alt="" />
        <h1 className="text-[17px] py-2 font-semibold text-justify">{title}</h1>
        <div className="text-justify">{label}</div>
      </div>
    </div>
  );
}

const LtqMqi = () => {
  return (
    <LayoutColumn>
      <section className="pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center py-20 bg-[#cafee6] rounded-bl-full">
          {/* gambar */}
          <div className="flex justify-center  md:hidden">
            <div className="w-10/12 ">
              <img src={ltq} alt="" className="w-full" />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-10/12 md:10/12 pt-5">
              <h1 className="text-[32px] text-center font-semibold mb-5">
                Cabang LTQ MKI
              </h1>
              <p className="text-[20px] font-semibold mb-2">
                Selamat Datang di Cabang LTQ MKI
              </p>
              <p>
                Di sini, kami membawa warisan Alquran kepada Anda dengan dedikasi dan semangat.
              </p>
            </div>
          </div>
          {/* gambar */}
          <div className="justify-center hidden md:block">
            <div className="flex justify-center">
              <div className="w-[500px] overflow-hidden">
                <img src={ltq} alt="" className="w-full scale-125" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {/* image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-10/12 lg:w-[400px] flex justify-end">
                <img src={education} alt="" className="h-full" />
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <div className="w-10/12 lg:w-8/12">
                <h1 className="font-bold py-2">
                  Tentang Kami
                </h1>
                <p className="text-justify">
                  Cabang Markaz Quran adalah bagian penting dari jaringan Lembaga Markaz Quran yang sudah dikenal secara luas di seluruh dunia. Kami berkomitmen untuk menyediakan pendidikan Alquran berkualitas tinggi dan memahaminya dengan mendalam. Dengan pengalaman bertahun-tahun dalam mengajar dan memahami Alquran, kami adalah mitra terpercaya dalam perjalanan spiritual dan intelektual Anda.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex justify-center">
            <div>
              <h1 className="text-center text-[20px] font-semibold">Pilihan Program</h1>
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
                  img={yayasan}
                  title={"Tahsin Reguler"}
                  label={
                    "Tahsin adalah istilah dalam bahasa Arab yang mengacu pada usaha untuk meningkatkan kualitas atau keindahan dalam membaca atau menghafal Al-Quran. Dalam konteks Islam, tahsin adalah salah satu dari dua konsep utama yang berkaitan dengan Al-Quran, dengan konsep lainnya adalah tartil."
                  }
                />
                <Card
                  img={yayasan}
                  title={"Tartil"}
                  label={
                    "Tartil adalah istilah dalam bahasa Arab yang merujuk pada cara membaca Al-Quran dengan sangat hati-hati, perlahan, dan dengan tajwid yang benar. Ini adalah cara membaca Al-Quran yang sangat dihormati dalam Islam, karena penting untuk memahami dan menghormati teks suci ini dengan cara yang paling baik dan sesuai."
                  }
                />
                <Card
                  img={yayasan}
                  title={"Talaqqi"}
                  label={
                    "Talaqqi adalah istilah dalam bahasa Arab yang mengacu pada metode tradisional dalam belajar Al-Quran atau ilmu agama Islam dengan cara mendengarkan dan mengulangi apa yang didengar dari seorang guru atau ustadz. Istilah ini sering digunakan dalam konteks pengajaran Al-Quran, hadis, fiqih, dan ilmu-ilmu agama lainnya."
                  }
                />
                <Card
                  img={yayasan}
                  title={"Keluarga Qurani"}
                  label={
                    `Istilah "keluarga" Qurani atau "Keluarga Al-Quran" adalah istilah yang sering digunakan untuk merujuk kepada keluarga atau rumah tangga di mana semua anggotanya terlibat dalam memahami, menghafal, dan mengamalkan Al-Quran. Konsep ini sangat dihargai dalam Islam karena Al-Quran dianggap sebagai pedoman hidup utama bagi umat Muslim.`
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutColumn>
  );
};

export default LtqMqi;
