import React, { useEffect, useState } from "react";
import Layout from "../../../layouts/Layout";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsActive,
} from "../../../components/breadcrumbs";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import useAuth from "../../../store/AuthStore";

function PembayaranPeserta() {
  const [tableData, setTableData] = useState([]);
  const user = useAuth((state) => state);

  const GetPembayaranPeserta = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACK_END_END_POINT_URL}/verifikasi-pembayaran`,
        {
          headers: {
            Aututhentication: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data, "halo");
        setTableData(data);
      });
  };

  useEffect(() => {
    GetPembayaranPeserta();
  }, []);

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Pendaftaran</BreadcrumbsItem>
        <BreadcrumbsActive>Pembayaran Peserta</BreadcrumbsActive>
      </Breadcrumbs>
      <section>
        {/* Table */}
        <div className="p-5 bg-white shadow rounded-md">
          <div className="flex justify-between items-center mb-5">
            <div className="flex gap-2">
              <span>Menampilkan</span>
              <select name="" id="" className="border">
                <option value="10">10</option>
                <option value="10">25</option>
                <option value="10">50</option>
                <option value="10">100</option>
              </select>
              <span>data</span>
            </div>
            <div className="flex gap-5">
              <input
                type="text"
                className=" border border-gray-300 p-1 rounded-md"
                placeholder="search..."
              />
              <Link
                to={"/pengaturan-kelas/buat-kelas"}
                className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                <span>Buat Kelas</span>
              </Link>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-[#2f3a4e] text-white text-sm">
                <th className=" p-2 w-10">No</th>
                <th className=" p-2 ">Nama Peserta</th>
                <th className=" p-2 ">Program</th>
                <th className=" p-2 ">Bank</th>

                <th className=" p-2">STATUS</th>
                <th className=" p-2 w-56"></th>
              </tr>
            </thead>
            <tbody>
              {tableData &&
                tableData.map((item, index) => (
                  <TableData
                    key={index}
                    id={item.id}
                    peserta={item.users}
                    program={"Tahsin"}
                    bank={"BCA"}
                    nomor={index + 1}
                    status={item.status}
                    bukti_pembayaran={item.bukti_pembayaran}
                    user={item.users}
                    GetPembayaranPeserta={GetPembayaranPeserta}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {/* End Table */}
      </section>
    </Layout>
  );
}

const TableData = ({
  id,
  peserta,
  program,
  bank,
  nomor,
  status,
  bukti_pembayaran,
  user,
  GetPembayaranPeserta,
}) => {
  const [stateModal, setStateModal] = useState(false);
  const [isShowCollapse, setIsShowCollapse] = useState(false);
  const [isShowModalConfirmation, setIsShowModalConfirmation] = useState(false);

  const HandleSubmitPembayaran = () => {
    axios
      .post(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/verifikasi-pembayaran/update/${id}`,
        {
          user_id: peserta.id,
          status: "Paid",
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response, "berhasil");
        setIsShowModalConfirmation(false);
        GetPembayaranPeserta();
      });
  };

  function formatTanggal(tanggalISO) {
    const date = new Date(tanggalISO);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    return date.toLocaleDateString("id-ID", options);
  }

  return (
    <>
      {/* Confirmation Update Modal */}
      <div
        className={
          isShowModalConfirmation
            ? "fixed bg-black bg-opacity-10 left-0 top-0 w-full h-full z-[999] flex justify-center items-center"
            : "hidden"
        }
      >
        <div className="bg-white p-5 rounded-md shadow relative">
          {/* Button Close */}
          <button
            className="bg-red-500 rounded-full p-1 text-white absolute -top-4 -right-4"
            onClick={() => setIsShowModalConfirmation(!isShowModalConfirmation)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* Modal Content */}
          <div className="h-full w-full">
            <h2 className="text-3xl font-bold mb-5">Apakah anda yakin?</h2>
            <div className="flex justify-center gap-5 items-center">
              <button
                onClick={() => HandleSubmitPembayaran()}
                className="bg-green-700 rounded-md px-5 py-2 text-white min-w-[100px]"
              >
                Ya
              </button>
              <button
                onClick={() =>
                  setIsShowModalConfirmation(!isShowModalConfirmation)
                }
                className="bg-green-700 rounded-md px-5 py-2 text-white min-w-[100px]"
              >
                Batal
              </button>
            </div>
          </div>
          {/* End Button Close */}
        </div>
      </div>
      {/* End Confirmation Update Modal */}

      {/* Modal */}
      <div
        className={
          stateModal
            ? "fixed bg-black bg-opacity-10 left-0 top-0 w-full h-full z-[999] flex justify-center items-center"
            : "hidden"
        }
      >
        <div className="bg-white p-5 rounded-md shadow w-[900px] h-[600px]  relative">
          {/* Button Close */}
          <button
            className="bg-red-500 rounded-full p-1 text-white absolute -top-4 -right-4"
            onClick={() => setStateModal(!stateModal)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* Modal Content */}
          <div className="  overflow-scroll h-full w-full">
            <div className="flex justify-center">
              <img
                src={`${
                  import.meta.env.VITE_BACK_END_END_POINT
                }/storage/${bukti_pembayaran}`}
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>
          {/* End Button Close */}
        </div>
      </div>
      {/* End Modal */}
      <tr className="text-sm text-gray-500 hover:bg-[#1698591e] h-12">
        <td className=" border-b w-10 text-center">{nomor}</td>
        <td className=" border-b font-semibold px-5 w-40 ">{peserta.name}</td>
        <td className=" border-b font-semibold px-5">{program}</td>
        <td className=" border-b text-center">{bank}</td>

        <td className="border-b text-center">
          {status === "Unpaid" ? (
            <div className="flex justify-center">
              <div className="bg-[#fff8ee] min-w-[100px] rounded-full border justify-center flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#f69640]"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">{status}</span>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="bg-[#eaf7ee] min-w-[100px] rounded-full border justify-center flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#23ae5b]"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">{status}</span>
              </div>
            </div>
          )}
        </td>

        <td className=" border-b ">
          <div className="flex justify-center items-center gap-1">
            <button
              className="p-1 bg-[#169859] text-[#f3faf6]  rounded-md font-medium gap-1 flex justify-center items-center  active:scale-95 transition duration-150"
              onClick={() => setIsShowCollapse(!isShowCollapse)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path
                  fillRule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="text-xs">Detail</span>
            </button>
            <button
              className="p-1 bg-[#169859] text-[#f3faf6]  rounded-md font-medium gap-1 flex justify-center items-center  active:scale-95 transition duration-150 "
              onClick={() => setStateModal(!stateModal)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                <path
                  fillRule="evenodd"
                  d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="text-xs">Pembayaran</span>
            </button>
            <button
              className="p-1 bg-[#169859] text-[#f3faf6]  rounded-md font-medium gap-1 flex justify-center items-center  active:scale-95 transition duration-150"
              onClick={() =>
                setIsShowModalConfirmation(!isShowModalConfirmation)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="text-xs">Aktivasi</span>
            </button>

            <button className="p-1 bg-red-500 text-[#f3faf6]  rounded-md font-semibold flex justify-center items-center  active:scale-95 transition duration-150 h-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td className="" colSpan={6}>
          <div
            className="max-h-0 overflow-hidden h-full transition-all duration-300 "
            style={{ maxHeight: isShowCollapse ? "200px" : "0px" }}
          >
            {/* Data */}
            <div className="h-[200px] grid grid-cols-2 gap-5 p-5">
              <div className="bg-white shadow rounded-md p-5">
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.status}</p>

                <p>{user.uuid}</p>
                <p>{formatTanggal(user.created_at)}</p>
              </div>
              <div className="bg-white shadow rounded-md p-5">
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.status}</p>
                <p>{user.uuid}</p>
                <p>{formatTanggal(user.created_at)}</p>
              </div>
            </div>
            {/* End Data */}
          </div>
        </td>
      </tr>
    </>
  );
};

export default PembayaranPeserta;
