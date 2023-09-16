import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../layouts/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import useAuth from "../../store/AuthStore";

function Pembayaran() {
  const [dataProgramPembayaran, setDataProgramPembayaran] = useState({});
  const [dataPembayaran, setDataPembayaran] = useState([]);
  const [userSelectBank, setUserSelectBank] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const user = useAuth((state) => state);
  let total = 0;
  Object.keys(dataProgramPembayaran).length === 0
    ? "kosong"
    : (total = total + parseInt(dataProgramPembayaran.program_harga.harga));

  function formatRupiah(angka) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    return formatter.format(angka);
  }

  const GetBankTransferData = () => {
    axios
      .get(`${import.meta.env.VITE_BACK_END_END_POINT_URL}/pembayaran`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      })
      .then((response) => {
        setDataPembayaran(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const GetUserProgramData = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACK_END_END_POINT_URL}/user-program/get/${
          user.uuid
        }`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data, "program data asd");
        setDataProgramPembayaran(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.log(dataProgramPembayaran && "ada", "ini di state");

  useEffect(() => {
    GetBankTransferData();
    GetUserProgramData();
  }, [user.uuid]);

  const HandlePembayaran = (id) => {
    setUserSelectBank(id);
    setModalShow(true);
    console.log("sampe sini");
  };

  return (
    <Layout>
      <ModalConfirmation
        show={modalShow}
        changeModal={setModalShow}
        id={userSelectBank}
        total={total}
        bank={dataProgramPembayaran}
      />
      <section className="min-h-screen font-poppins text-[#333333]">
        <div className="w-full mb-5 bg-white min-h-[100px] shadow rounded-md">
          <div className="text-2xl font-semibold p-5">Program</div>
          <hr />
          <div className="p-5">
            {Object.keys(dataProgramPembayaran).length === 0 ? (
              <LoaderData />
            ) : (
              <div className="grid grid-cols-1 gap-2 relative">
                <div className="w-full flex">
                  <p className="w-56 font-semibold">Nama Program</p>
                  <p>
                    :{" "}
                    {dataProgramPembayaran &&
                      dataProgramPembayaran.program.program_name}
                  </p>
                </div>
                <div className="w-full flex">
                  <p className="w-56 font-semibold">Nama Peserta</p>
                  <p>
                    :{" "}
                    {dataProgramPembayaran && dataProgramPembayaran.users.name}
                  </p>
                </div>
                <div className="w-full flex">
                  <p className="w-56 font-semibold">Email</p>
                  <p>
                    :{" "}
                    {dataProgramPembayaran && dataProgramPembayaran.users.email}
                  </p>
                </div>
                <div className="w-full flex">
                  <p className="w-56 font-semibold">Tanggal</p>
                  <p>
                    :{dataProgramPembayaran && dataProgramPembayaran.created_at}
                  </p>
                </div>

                <div className="absolute right-0 bottom-0">
                  <div className="flex  justify-end gap-5 ">
                    <div className="bg-[#169859] p-2 rounded-md text-white text-end">
                      <h1 className="font-bold">Total yang harus dibayar</h1>
                      <span className="">{formatRupiah(total)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white w-fit h-fit p-2 rounded-md shadow mb-5">
          <h4 className="text-2xl font-semibold ">Pilih Opsi Pembayaran</h4>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {dataPembayaran &&
            dataPembayaran.map((item) => (
              <button
                onClick={() => HandlePembayaran(item.id)}
                className=" h-[200px] flex justify-center items-center relative rounded-md bg-white shadow hover:scale-105 transition duration-150"
              >
                <div className="flex justify-center items-center h-[100px] w-[150px] ">
                  <img
                    src={`${import.meta.env.VITE_BACK_END_END_POINT}/storage/${
                      item.type_bank
                    }`}
                    alt=""
                    className="h-full w-full"
                  />
                </div>
                <span className="absolute bottom-0 bg-slate-400 text-white w-full text-center py-2 rounded-b-md">
                  No.Rekening {item.norek}
                </span>
              </button>
            ))}
        </div>
      </section>
    </Layout>
  );
}

const LoaderData = () => {
  return (
    <div className=" h-56 flex justify-center items-center">
      <div className="animate-pulse text-2xl">Loading...</div>
    </div>
  );
};

const ModalConfirmation = ({ show, changeModal, id, total, bank }) => {
  const navigate = useNavigate();
  const user = useAuth((state) => state);
  console.log(total, id, "modal");
  const HandleNextPost = () => {
    axios
      .post(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/program-pembayaran/create`,
        {
          uuid: user.uuid,
          pembayaran_id: id,
          total: total,
          bank: bank,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then((data) => {
        console.log(data);
        changeModal(false);
        navigate(`/transfer-pembayaran/${user.uuid}`);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div
      className="fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-50 justify-center items-center"
      style={{ display: show ? "flex" : "none" }}
    >
      <div className="p-5 bg-white rounded-md flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-5">Apakah anda yakin?</h2>
        <div className="flex gap-5 items-center">
          <button
            type="submit"
            onClick={() => HandleNextPost()}
            className="bg-green-700 rounded-md px-5 py-2 text-white min-w-[100px]"
          >
            Ya
          </button>
          <button
            onClick={() => changeModal(false)}
            className="bg-green-700 rounded-md px-5 py-2 text-white min-w-[100px]"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pembayaran;
