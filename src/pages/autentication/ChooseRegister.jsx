import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ChooseRegister = () => {
  const [dataCabang, setDataCabang] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCabangKota = () => {
    axios
      .get(`${import.meta.env.VITE_BACK_END_END_POINT_URL}/get-kota`)
      .then(({ data }) => {
        const newData = data.map((kota) => ({
          id: kota.id,
          title: kota.nama_kota,
          cabang: kota.cabang.map((cabang) => ({
            id: cabang.id,
            nama_cabang: cabang.nama_cabang,
            gambar: cabang.logo,
            slug: cabang.slug,
          })),
        }));
        setIsLoading(false);
        setDataCabang(newData);
      });
  };

  //   const dummyData = [
  //     {
  //       id: 1,
  //       title: "Jakarta",
  //       cabang: [
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/LTQ.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/MAA.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/MARKAZ.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/KAJIANTAFSIR.png",
  //           slug: "markaz-indonesia",
  //         },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       title: "Bandung",
  //       cabang: [
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/MAA.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/LTQ.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/MARKAZ.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/KAJIANTAFSIR.png",
  //           slug: "markaz-indonesia",
  //         },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       title: "Yogyakarta",
  //       cabang: [
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/MAA.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/LTQ.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/MARKAZ.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/KAJIANTAFSIR.png",
  //           slug: "markaz-indonesia",
  //         },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       title: "Surabaya",
  //       cabang: [
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/MAA.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/LTQ.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/MARKAZ.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/KAJIANTAFSIR.png",
  //           slug: "markaz-indonesia",
  //         },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       title: "Malang",
  //       cabang: [
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/MAA.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/LTQ.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/MARKAZ.png",
  //           slug: "markaz-indonesia",
  //         },
  //         {
  //           id: 1,
  //           nama_cabang: "LTQ ",
  //           gambar: "/image/KAJIANTAFSIR.png",
  //           slug: "markaz-indonesia",
  //         },
  //       ],
  //     },
  //   ];

  useEffect(() => {
    getAllCabangKota();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#f1fff8] via-[#e6fff2] to-[#f1fff8] p-5  text-gray-500">
      {isLoading ? (
        <div className="mb-5 bg-gray-300 text-white p-5 h-[75px] rounded-md shadow animate-pulse"></div>
      ) : (
        <div className="mb-5 bg-[#169859] text-white p-5 rounded-md shadow">
          <h4 className="text-2xl font-semibold ">
            PILIH CABANG UNTUK MENDAFTAR
          </h4>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5">
        {isLoading ? (
          <>
            <div className="bg-gray-300 p-5 rounded-md shadow min-h-[250px] animate-pulse"></div>
            <div className="bg-gray-300 p-5 rounded-md shadow min-h-[250px] animate-pulse"></div>
          </>
        ) : (
          <>
            {dataCabang &&
              dataCabang.map((item, index) => (
                <SectionCardChoose
                  key={index}
                  title={item.title}
                  cabang={item.cabang}
                />
              ))}
          </>
        )}
      </div>
    </section>
  );
};

const SectionCardChoose = ({ title, cabang }) => {
  return (
    <div className="bg-white p-5 rounded-md shadow">
      <h4 className="font-semibold text-2xl mb-5 text-gray-500 w-fit border-b-2 pb-1 border-[#169859]">
        {title} :
      </h4>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5">
        {cabang &&
          cabang.map((item, index) => (
            <BranchCard
              key={index}
              nama={item.nama_cabang}
              slug={item.slug}
              gambar={item.gambar}
            />
          ))}
      </div>
    </div>
  );
};

const BranchCard = ({ nama, slug, gambar }) => {
  return (
    <Link
      to={`/register/${slug}`}
      className="bg-white rounded-md shadow h-32 hover:scale-110 transition duration-150 cursor-pointer flex justify-center items-center"
    >
      <img
        src={`${import.meta.env.VITE_BACK_END_END_POINT}/storage/${gambar}`}
        alt={slug}
        className=" h-28 object-cover"
      />
    </Link>
  );
};

export default ChooseRegister;
