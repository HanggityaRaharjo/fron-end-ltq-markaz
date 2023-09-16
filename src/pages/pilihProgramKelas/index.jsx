import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../layouts/Layout";
import DataTable from "react-data-table-component";
import { data } from "autoprefixer";
import axios from "axios";
import useAuth from "../../store/AuthStore";
import { useNavigate } from "react-router-dom";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsActive,
} from "../../components/breadcrumbs";
import Cookies from "js-cookie";

function PilihProgram() {
  const [programHargaId, setProgramHargaId] = useState(0);
  const [programId, setProgramId] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [cabangLembagaId, setCabangLembagaId] = useState("");

  const [showProgram, setShowProgram] = useState([]);

  // Pura pura dari cabang ltq
  const cabang_id = 1;
  const navigate = useNavigate();
  const [stateLoadingData, setStateLoadingData] = useState(false);
  const [records, setRecords] = useState(data);
  const [dataProgram, setDataProgram] = useState([]);
  const user = useAuth((state) => state);

  function handleFilter(event) {
    const newData = data.filter((row) =>
      row.program.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecords(newData);
  }

  const HandleSubmitProgram = () => {
    console.log("sampe sini di parent", programId, programHargaId);
    axios
      .post(
        `${import.meta.env.VITE_BACK_END_END_POINT_URL}/user-program/create`,
        {
          uuid: user.uuid,
          program_id: programId,
          program_harga_id: programHargaId,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        navigate("/pembayaran");
      });
  };
  useEffect(() => {
    const filteredDataProgram = dataProgram.filter(
      (item) => item.cabang_lembaga_id == user.user_cabang_id
    );
    setShowProgram(filteredDataProgram);
  }, [dataProgram, user.user_cabang_id]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACK_END_END_POINT_URL}/program`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      })
      .then(({ data }) => {
        setDataProgram(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const HandleChoose = (program_id, programharga_id) => {
    console.log("terklik");
    setProgramId(program_id);
    setProgramHargaId(programharga_id);
  };

  const FormatTanggal = (tanggal) => {
    const tanggalObj = new Date(tanggal);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const tanggalLengkap = tanggalObj.toLocaleDateString("id-ID", options);
    return tanggalLengkap;
  };

  console.log(showProgram);

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Pendaftaran</BreadcrumbsItem>
        <BreadcrumbsItem>Biodata</BreadcrumbsItem>
        <BreadcrumbsActive>Pilih Program</BreadcrumbsActive>
      </Breadcrumbs>
      <ModalConfirmation
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        HandleSubmitProgram={HandleSubmitProgram}
      />
      <section className="p-5 bg-white min-w-screen shadow rounded-md">
        <div className="bg-white  min-h-[224px]">
          <div className="flex justify-between items-center mb-5">
            {dataProgram.length != 0 ? (
              <>
                <h1 className="font-bold">Jadwal Kelas</h1>
                <input
                  type="text"
                  className=" border border-gray-300 p-1 rounded-md"
                  placeholder="search..."
                  onChange={handleFilter}
                />
              </>
            ) : (
              <>
                <div className="bg-gray-300 animate-pulse h-6 rounded-md w-32"></div>
                <div className="bg-gray-300 animate-pulse h-6 rounded-md w-40"></div>
              </>
            )}
          </div>

          {/* tabel */}
          {showProgram.length != 0 ? (
            <>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="font-semibold p-2 border w-10">No</th>
                    <th className="font-semibold p-2 border">nama program</th>
                    <th className="font-semibold p-2 border">Hari</th>
                    <th className="font-semibold p-2 border">Jam</th>
                    <th className="font-semibold p-2 border">Pilihan</th>
                  </tr>
                </thead>
                <tbody>
                  {showProgram &&
                    showProgram.map((item, index) => (
                      <tr
                        key={item.id}
                        className="cursor-pointer hover:bg-[#1698591e]"
                        onClick={() =>
                          HandleChoose(item.id, item.programharga.id)
                        }
                      >
                        <td className="p-2 border w-10 text-center">
                          {index + 1}
                        </td>
                        <td className="p-2 border text-center">
                          {item.program_name}
                        </td>
                        <td className="p-2 border text-center">
                          {FormatTanggal(item.program_day.date_start)}
                        </td>
                        <td className="p-2 border text-center">
                          {item.program_day.jam}
                        </td>
                        <td className="p-2 border text-center">
                          <div className="flex justify-center">
                            {programId == item.id ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 text-[#169859]"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 text-gray-500"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {/* end tabel */}

              <div className="flex justify-end mt-5">
                {programId != 0 ? (
                  <button
                    type="button"
                    className="bg-[#169859] text-[#f3faf6] p-2 w-32  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
                    onClick={() => setIsShowModal(true)}
                  >
                    <span>Tambah</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="bg-[#16985980] text-[#f3faf6] p-2 w-32  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
                    disabled
                  >
                    <span>Tambah</span>
                  </button>
                )}
              </div>
            </>
          ) : (
            <LoaderData />
          )}
        </div>
      </section>
    </Layout>
  );
}

const ModalConfirmation = ({
  isShowModal,
  setIsShowModal,
  HandleSubmitProgram,
}) => {
  return (
    <div
      className="fixed z-[1000]  left-0 top-0 h-screen w-screen bg-black bg-opacity-10 flex justify-center items-center"
      style={{ display: isShowModal ? "flex" : "none" }}
    >
      <div className="p-5 bg-white rounded-md flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold text-gray-500 mb-5">
          Apakah anda yakin?
        </h2>
        <div className="flex gap-5 items-center ">
          <button
            className="bg-green-700 rounded-md px-5 py-2 text-white min-w-[100px]"
            onClick={() => HandleSubmitProgram()}
          >
            Ya
          </button>
          <button
            className="bg-green-700 rounded-md px-5 py-2 text-white min-w-[100px]"
            onClick={() => setIsShowModal(false)}
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

const LoaderData = () => {
  return (
    <div className="min-h-[150px] animate-pulse rounded-md bg-gray-300 flex justify-center items-center"></div>
  );
};

export default PilihProgram;
