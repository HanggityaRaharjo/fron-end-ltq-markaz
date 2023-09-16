import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { Link, useNavigate } from "react-router-dom";
import ChartComponent from "../components/ChartComponent";
import { Breadcrumbs, BreadcrumbsActive } from "../components/breadcrumbs";
import useAuth from "../store/AuthStore";
import axios from "axios";
import Cookies from "js-cookie";

const Home = () => {
  const user = useAuth((state) => state);
  const [isAdminCabang, setAdminCabanag] = useState(false);
  const [isPeserta, setIsPeserta] = useState(false);
  const [isGuru, setIsGuru] = useState(false);
  const [isTataUsaha, setIsTataUsaha] = useState(false);
  const [isBendahara, setIsBendahara] = useState(false);
  const [isPanitiaPsb, setIsPanitiaPsb] = useState(false);

  const RoleCheck = () => {
    if (user.role.length !== 0) {
      user.role[0].admincabang == 1
        ? setAdminCabanag(true)
        : setAdminCabanag(false);
      user.role[0].bendahara == 1
        ? setIsBendahara(true)
        : setIsBendahara(false);
      user.role[0].guru == 1 ? setIsGuru(true) : setIsGuru(false);
      user.role[0].peserta == 1 ? setIsPeserta(true) : setIsPeserta(false);
      user.role[0].tatausaha == 1
        ? setIsTataUsaha(true)
        : setIsTataUsaha(false);
      user.role[0].panitia_psb == 1
        ? setIsPanitiaPsb(true)
        : setIsPanitiaPsb(false);
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  const [bannerShow, setIsBannerShow] = useState("");

  const navigate = useNavigate();

  const GetPesertaActive = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACK_END_END_POINT_URL}/user/show/by-uuid/${
          user.uuid
        }`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        axios
          .get(
            `${
              import.meta.env.VITE_BACK_END_END_POINT_URL
            }/verifikasi-pembayaran/show/by-user/${user.uuid}`,
            {
              headers: {
                Authorization: `Bearer ${Cookies.get("access_token")}`,
              },
            }
          )
          .then((response) => {
            console.log(response);
            setIsLoading(false);
            if (
              response.data.status === 404 &&
              data.status === null &&
              data.user_level === null
            ) {
              setIsBannerShow("form-biodata");
            }

            if (
              response.data.status === 200 &&
              data.status === null &&
              data.user_level === null
            ) {
              setIsBannerShow("waiting-admin");
            }

            if (
              response.data.status === 200 &&
              data.status === "active" &&
              data.user_level === null
            ) {
              setIsBannerShow("placement-test");
            }

            if (
              response.data.status === 200 &&
              data.status === "active" &&
              data.user_level !== null
            ) {
              setIsBannerShow("done");
            }
          });
      });
  };

  // const GetDataCabang = () => {
  //   axios
  //     .get(
  //       `${import.meta.env.VITE_BACK_END_END_POINT_URL}/user-cabang/by-user/${
  //         user.uuid
  //       }`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${Cookies.get("access_token")}`,
  //         },
  //       }
  //     )
  //     .then(({ data }) => {
  //       setIsHasCabang(true);
  //       if (Object.keys(data).length === 0) {
  //         navigate("/pilih-cabang");
  //       }
  //     });
  // };

  useEffect(() => {
    // GetDataCabang();
    GetPesertaActive();
  }, [user.uuid]);

  return (
    <Layout>
      <Breadcrumbs>
        <div className="breadcrumbs-item text-gray-800 font-semibold">
          Dashboard
        </div>
      </Breadcrumbs>
      <section className="min-h-screen ">
        {bannerShow === "" ? (
          <JumbotronLoader />
        ) : (
          <JumbotronComponent bannerShow={bannerShow} />
        )}

        {/* Grafik */}
        <div className="flex rounded-md  gap-5 mb-5">
          {isLoading ? (
            <div className="w-8/12 bg-white rounded-md shadow flex justify-center p-2 min-h-[365px]">
              <div className="w-full h-full bg-gray-300  animate-pulse"></div>
            </div>
          ) : (
            <div className="w-8/12 bg-[#2f3a4e] rounded-md shadow flex justify-center p-2">
              <ChartComponent />
            </div>
          )}

          <div className="w-4/12 flex flex-col justify-between">
            {/*  */}
            <div className="bg-white border-r-4 border-[#169859] p-5 h-fit rounded-md rounded-r-none shadow">
              <h1 className="text-center text-2xl font-semibold mb-5 border-b-2">
                Nilai Semester
              </h1>

              <div className="text-sm text-gray-500">
                <div className="font-semibold flex">
                  <p className="w-40">Nilai Kumulatif</p>
                  <p>: 0</p>
                </div>
                <div className="font-semibold flex">
                  <p className="w-40">Nilai Semester Ini</p>
                  <p>: 0</p>
                </div>
                <div className="font-semibold flex">
                  <p className="w-40">Jumlah Program</p>
                  <p>: 0</p>
                </div>
                <div className="font-semibold flex">
                  <p className="w-40">Mengulang Program</p>
                  <p>: Tidak ada</p>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="h-44 bg-[#169859] rounded-md shadow"></div>
            {/*  */}
          </div>
        </div>
        {/* End Grafik */}

        {/* <div className="grid grid-cols-4 gap-5 mb-5">
          <div className="h-32 bg-[#f3fffd] rounded-md shadow-lg flex justify-center items-center relative">
            <span className="text-2xl font-bold">4</span>
            <div className="absolute -top-2 left-0 bg-[#f45b5d] rounded-md text-white px-2 py-1">
              Jumlah Program
            </div>
          </div>

          <div className="h-32 bg-[#fcf6f3] rounded-md shadow-lg flex justify-center items-center relative">
            <span className="text-2xl font-bold">4</span>
            <div className="absolute -top-2 left-0 bg-[#f37a21] rounded-md text-white px-2 py-1">
              Jumlah Program
            </div>
          </div>

          <div className="h-32 bg-[#f0f6f5] rounded-md shadow-lg flex justify-center items-center relative">
            <span className="text-2xl font-bold">4</span>
            <div className="absolute -top-2 left-0 bg-[#4d42e0] rounded-md text-white px-2 py-1">
              Jumlah Program
            </div>
          </div>

          <div className="h-32 bg-[#fff8ee] rounded-md shadow-lg flex justify-center items-center relative">
            <span className="text-2xl font-bold">4</span>
            <div className="absolute -top-2 left-0 bg-[#169859] rounded-md text-white px-2 py-1">
              Jumlah Program
            </div>
          </div>
        </div> */}
      </section>
    </Layout>
  );
};

const JumbotronLoader = () => {
  return (
    <div
      className="
      h-36
      rounded-md
      relative
      overflow-hidden
      shadow
    
      mb-5
      bg-white p-5
      "
    >
      <div className="animate-pulse flex gap-5 h-full">
        <div className="w-1/2 h-full flex flex-col justify-center gap-5">
          <div className="bg-gray-300 rounded-md h-4"></div>
          <div className="flex justify-center">
            <div className="bg-gray-300 rounded-md h-4 w-32"></div>
          </div>
        </div>
        <div className="bg-gray-300 rounded-md w-1/2 h-full"></div>
      </div>
    </div>
  );
};

const JumbotronComponent = ({ bannerShow }) => {
  console.log(bannerShow);
  if (bannerShow !== "done") {
    return (
      <div className="h-36 rounded-md relative overflow-hidden shadow flex items-center mb-5">
        <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-[#169859] to-[#007dc4] absolute -right-32 shadow-[#1698597a] -top-32 shadow-lg"></div>
        <div className="w-72 h-72 rounded-full bg-gradient-to-br from-[#169859] to-[#007dc4] absolute -left-32 shadow-[#1698597a] -bottom-32 shadow-lg"></div>
        <div className="w-20 h-20 rounded-full border-8 absolute left-32 shadow-[#1698597a] top-10 shadow-lg"></div>
        <div className="bg-[#1698592a] bg-opacity-40 backdrop-blur-sm w-full h-full relative flex items-center justify-around ">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-3xl font-bold ">
              {bannerShow === "form-biodata"
                ? "Kamu belum terdaftar sebagai peserta"
                : null}
              {bannerShow === "waiting-admin"
                ? "Menunggu Konfirmasi Admin"
                : null}
              {bannerShow === "placement-test"
                ? "Kamu belum mengerjakan Placement Test"
                : null}
            </h1>

            {bannerShow === "form-biodata" ? (
              <Link
                to={"/peserta-baru"}
                className="bg-[#169859] text-[#f3faf6] p-2  rounded-md font-semibold hover:bg-opacity-70 transition duration-150 animate-pulse active:scale-95"
              >
                Daftar Disini
              </Link>
            ) : null}
            {bannerShow === "placement-test" ? (
              <Link
                to={"/placement-test"}
                className="bg-[#169859] text-[#f3faf6] p-2  rounded-md font-semibold hover:bg-opacity-70 transition duration-150 animate-pulse active:scale-95"
              >
                Mulai Kerjakan
              </Link>
            ) : null}
          </div>
          <div>
            <img
              src="/animate/filing-system-animate.svg"
              className="w-full h-32"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
