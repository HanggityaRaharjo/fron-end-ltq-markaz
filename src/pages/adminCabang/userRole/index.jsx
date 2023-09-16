import { useState, useEffect } from "react";
import Layout from "../../../layouts/Layout";
import {
  Breadcrumbs,
  BreadcrumbsActive,
  BreadcrumbsItem,
} from "../../../components/breadcrumbs";
import axios from "axios";
import Cookies from "js-cookie";

function UserRole() {
  const [tableData, setTableData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [countTotalShowData, setCountTotalShowData] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [linkPage, setLinkPage] = useState([]);

  const GetDataUserRole = () => {
    setTableData([]);
    axios
      .get(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/admincabang/user?per_page=${countTotalShowData}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data, "disini");
        setLinkPage(data.links);
        setTableData(data.data);
        setCurrentPage(data.current_page);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    GetDataUserRole();
  }, []);

  useEffect(() => {
    GetDataUserRole();
  }, [countTotalShowData]);

  const HandleMovePage = (url) => {
    setTableData([]);
    axios
      .get(`${url}&per_page=${countTotalShowData}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      })
      .then(({ data }) => {
        console.log("disini setelah diklik page button", data);
        setLinkPage(data.links);
        setTableData(data.data);
        setCurrentPage(data.current_page);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Otorisasi</BreadcrumbsItem>
        <BreadcrumbsActive>Pengguna</BreadcrumbsActive>
      </Breadcrumbs>
      <section>
        {/* Table */}
        <div className="p-5 bg-white rounded-md shadow">
          <div className="flex justify-between items-center mb-5">
            <div className="flex gap-2">
              <span>Menampilan</span>
              <select
                name=""
                id=""
                className="border"
                onChange={(e) => setCountTotalShowData(e.target.value)}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span>data</span>
            </div>
            <div className="flex gap-5">
              <input
                type="text"
                className=" border border-gray-300 p-1 rounded-md"
                placeholder="search..."
              />
            </div>
          </div>
          <table className="w-full mb-5">
            <thead>
              <tr className="bg-[#2f3a4e] text-white text-sm">
                <th className=" p-2 w-10">
                  <p className="translate-y-8">No</p>
                </th>
                <th className=" p-2 w-72">
                  <p className="translate-y-8">Nama Pengguna</p>
                </th>
                <th className="border p-2" colSpan={5}>
                  Peran
                </th>
                <th className="p-2 translate-y-8">Aksi</th>
              </tr>
              <tr className="bg-[#2f3a4e] text-white text-sm">
                <th className=" p-2 w-10" colSpan={2}></th>

                <th className="border p-2 bg-[#169859]">Admin Cabang</th>
                <th className="border p-2 bg-[#169859]">Peserta</th>
                <th className="border p-2 bg-[#169859]">Guru</th>
                <th className="border p-2 bg-[#169859]">Tata Usaha</th>
                <th className="border p-2 bg-[#169859]">Bendahara</th>
                <th className=" p-2 "></th>
              </tr>
            </thead>
            <tbody>
              {tableData.length !== 0 ? (
                tableData.map((item, index) => (
                  <TableData
                    key={index}
                    nama={item.name}
                    nomor={index + 1}
                    roles={item.roles}
                    peserta={item.biodata_peserta}
                    user_id={item.id}
                  />
                ))
              ) : (
                <LoaderTableData countTotalShowData={countTotalShowData} />
              )}
            </tbody>
          </table>
          <div className="flex justify-end text-sm gap-2">
            {linkPage.map((item, index) =>
              index === 0 ? (
                currentPage == index + 1 ? (
                  <button className="bg-[#16985980] text-[#f3faf6] p-2  rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                    <span>Sebelumnya</span>
                  </button>
                ) : (
                  <button className="bg-[#169859] text-[#f3faf6] p-2  rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                    <span>Sebelumnya</span>
                  </button>
                )
              ) : index + 1 === linkPage.length ? (
                <button className="bg-[#169859] text-[#f3faf6] p-2  rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                  <span>Selanjutnya</span>
                </button>
              ) : currentPage != index ? (
                <button
                  className="bg-[#169859] text-[#f3faf6] p-2  rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                  onClick={() => HandleMovePage(item.url)}
                >
                  <span>{item.label}</span>
                </button>
              ) : (
                <button className="bg-[#16985980] text-[#f3faf6] p-2  rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                  <span>{item.label}</span>
                </button>
              )
            )}
          </div>
        </div>
        {/* End Table */}
      </section>
    </Layout>
  );
}

const TableData = ({ nama, nomor, roles, user_id }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPeserta, setIsPeserta] = useState(false);
  const [isGuru, setIsGuru] = useState(false);
  const [isTataUsaha, setIsTataUsaha] = useState(false);
  const [isBendahara, setIsBendahara] = useState(false);

  const HandleUpdateRoleUser = () => {
    const dataRole = {
      superadmin: 0,
      peserta: isPeserta ? 1 : 0,
      guru: isGuru ? 1 : 0,
      tatausaha: isTataUsaha ? 1 : 0,
      bendahara: isBendahara ? 1 : 0,
      panitia_psb: 0,
      admincabang: isAdmin ? 1 : 0,
    };

    axios
      .post(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/admincabang/role/update/${user_id}`,
        dataRole,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    if (roles[0] !== undefined) {
      roles[0].admincabang == 1 ? setIsAdmin(true) : setIsAdmin(false);
      roles[0].peserta == 1 ? setIsPeserta(true) : setIsPeserta(false);
      roles[0].guru == 1 ? setIsGuru(true) : setIsGuru(false);
      roles[0].tatausaha == 1 ? setIsTataUsaha(true) : setIsTataUsaha(false);
      roles[0].bendahara == 1 ? setIsBendahara(true) : setIsBendahara(false);
    } else {
      setIsAdmin(false);
      setIsPeserta(false);
      setIsTataUsaha(false);
      setIsBendahara(false);
    }
  }, []);

  return (
    <tr className="text-sm text-gray-500 hover:bg-[#1698591e]">
      <td className="border-b p-2  text-center">{nomor}</td>
      <td className="border-b p-2 font-semibold">{nama}</td>
      {/* Admin Cabang */}
      <td className="border-b p-2 w-16">
        <div
          className={`w-16 h-6 border-2 shadow-md  rounded-full  relative cursor-pointer transition  duration-300 ${
            isAdmin
              ? "bg-[#169859] border-[#169859]"
              : "bg-gray-300 border-gray-300"
          }`}
          onClick={() => setIsAdmin(!isAdmin)}
        >
          <div
            className={`h-5 w-5 rounded-full bg-gray-100 absolute shadow-md transition-all duration-300 flex justify-center items-center ${
              isAdmin ? "left-10" : "left-0"
            }`}
          >
            {isAdmin ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 text-[#169859]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
      </td>
      {/* End Admin Cabang */}
      {/* Peserta */}
      <td className="border-b p-2 w-16">
        <div
          className={`w-16 h-6 border-2 shadow-md  rounded-full relative cursor-pointer transition duration-300 ${
            isPeserta
              ? "bg-[#169859] border-[#169859]"
              : "bg-gray-300 border-gray-300"
          }`}
          onClick={() => setIsPeserta(!isPeserta)}
        >
          <div
            className={`h-5 w-5 rounded-full bg-gray-100 absolute shadow-md transition-all duration-300 flex justify-center items-center ${
              isPeserta ? "left-10" : "left-0"
            }`}
          >
            {isPeserta ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 text-[#169859]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
      </td>
      {/* End Peserta */}
      {/* Guru */}
      <td className="border-b p-2 w-16">
        <div
          className={`w-16 h-6 border-2 shadow-md  rounded-full relative cursor-pointer transition duration-300 ${
            isGuru
              ? "bg-[#169859] border-[#169859]"
              : "bg-gray-300 border-gray-300"
          }`}
          onClick={() => setIsGuru(!isGuru)}
        >
          <div
            className={`h-5 w-5 rounded-full bg-gray-100 absolute shadow-md transition-all duration-300 flex justify-center items-center ${
              isGuru ? "left-10" : "left-0"
            }`}
          >
            {isGuru ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 text-[#169859]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
      </td>
      {/* End Guru */}
      {/* Tata Usaha */}
      <td className="border-b p-2 w-16">
        <div
          className={`w-16 h-6 border-2 shadow-md  rounded-full relative cursor-pointer transition duration-300 ${
            isTataUsaha
              ? "bg-[#169859] border-[#169859]"
              : "bg-gray-300 border-gray-300"
          }`}
          onClick={() => setIsTataUsaha(!isTataUsaha)}
        >
          <div
            className={`h-5 w-5 rounded-full bg-gray-100 absolute shadow-md transition-all duration-300 flex justify-center items-center ${
              isTataUsaha ? "left-10" : "left-0"
            }`}
          >
            {isTataUsaha ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 text-[#169859]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
      </td>
      {/* End Tata Usaha */}
      {/* Bendahara */}
      <td className="border-b p-2 w-16">
        <div
          className={`w-16 h-6 border-2 shadow-md  rounded-full relative cursor-pointer transition duration-300 ${
            isBendahara
              ? "bg-[#169859] border-[#169859]"
              : "bg-gray-300 border-gray-300"
          }`}
          onClick={() => setIsBendahara(!isBendahara)}
        >
          <div
            className={`h-5 w-5 rounded-full bg-gray-100 absolute shadow-md transition-all duration-300 flex justify-center items-center ${
              isBendahara ? "left-10" : "left-0"
            }`}
          >
            {isBendahara ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 text-[#169859]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
      </td>
      {/* End Bendahara */}
      <td className="w-32 border-b">
        <div className="flex justify-center gap-5">
          <button
            className="bg-[#169859] text-[#f3faf6] p-2 w-20 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            onClick={() => HandleUpdateRoleUser()}
          >
            <span>Simpan</span>
          </button>
          <button className="bg-[#169859] text-[#f3faf6] p-2 w-20 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
            <span>Reset</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

const LoaderTableData = ({ countTotalShowData }) => {
  return (
    <>
      {Array.from({ length: countTotalShowData }).map((_, index) => (
        <tr>
          <td className="border-b p-2 text-center" colSpan={8}>
            <div className="h-7 w-full rounded-md bg-gray-300 animate-pulse"></div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserRole;
