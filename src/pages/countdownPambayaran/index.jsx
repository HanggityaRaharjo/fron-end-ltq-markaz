import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import bank from "../../assets/logo/BCA.png";
import copy from "copy-to-clipboard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import useAuth from "../../store/AuthStore";

function CountdownPembayaran() {
  const targetTime = new Date().getTime() + 1 * 30 * 60 * 1000;
  const [dataPembayaran, setDataPemayaran] = useState([]);
  const navigate = useNavigate();
  const user = useAuth((state) => state);

  function formatRupiah(angka) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    return formatter.format(angka);
  }

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/program-pembayaran/show/${user.uuid}`,
        {
          headers: {
            Aututhentication: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data, "halo");
        setDataPemayaran(data);
      });
  }, []);

  const HandleSubmitPembayaran = (e) => {
    e.preventDefault();

    // console.log(dataPembayaran);

    axios
      .post(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/verifikasi-pembayaran/create`,
        {
          uuid: user.uuid,
          bukti_pembayaran: e.target["bukti_pembayaran"].files[0],
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
        navigate("/home");
      });
  };

  return (
    <Layout>
      <section className="min-h-screen flex justify-center items-center font-poppins">
        <div className="h-auto w-[500px] bg-white rounded-md shadow-lg px-5 border">
          <div className="flex justify-center">
            <div className="text-center mt-2">
              <h1 className="font-bold text-[20px]">
                Segera selesaikan pembayaran
              </h1>
              <h1 className="font-bold text-[20px]">
                Anda sebelum waktu habis
              </h1>
              <div className="mt-2">
                <hr className="border-[1px] border-gray-300" />
              </div>
            </div>
          </div>

          {/* countdown */}
          <div className="flex justify-center mt-10">
            <div className="">
              <h1 className="">sisa waktu pembayaran anda</h1>
              <div className="flex justify-center">
                <CountdownTimer targetTime={targetTime} />
              </div>
            </div>
          </div>
          {/* end countdown */}

          {Object.keys(dataPembayaran).length === 0 ? (
            " "
          ) : (
            <div className="mt-10 mb-10">
              <div className="mt-2">
                <div className="flex justify-center">
                  <div className="h-[100px] w-[180px]">
                    <img
                      src={`${
                        import.meta.env.VITE_BACK_END_END_POINT
                      }/storage/${dataPembayaran.pembayaran.type_bank}`}
                      alt=""
                      className="h-full w-full"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-center">
                    <h4 className="font-semibold">Total pembayaran</h4>
                    <div className="p-2 min-w-[300px] rounded-md bg-white shadow  border-gray-400">
                      <p>{formatRupiah(dataPembayaran.total)}</p>
                      {/* {dataPembayaran.pembayaran.type_bank} */}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <div className="text-center">
                    <h4 className="font-semibold">Nomor Rekening</h4>
                    <div className="p-2 min-w-[300px] rounded-md bg-white shadow  border-gray-400">
                      <p>{dataPembayaran.pembayaran.norek}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <form method="post" onSubmit={(e) => HandleSubmitPembayaran(e)}>
            <div className="mt-5 flex flex-col items-center">
              <h1>Upload bukti pembayaran</h1>
              <input
                type="file"
                name="bukti_pembayaran"
                style={{ fontSize: "12px", color: "#333" }}
                className="border border-gray-400 w-[210px]"
              />
            </div>
            <div className="pt-10 mb-5">
              <button
                type="submit"
                className="bg-[#169859] text-[#f3faf6] p-2 w-full  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
              >
                <span>Kirim</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

const CountdownTimer = ({ targetTime }) => {
  const calculateTimeLeft = () => {
    const difference = targetTime - new Date().getTime();
    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    // const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <thead>
        <td className="p-1 text-center font-bold text-[30px]">
          {timeLeft.hours}
        </td>
        <td className="p-1 text-center font-bold text-[30px]">:</td>
        <td className="p-1 text-center font-bold text-[30px]">
          {timeLeft.minutes}
        </td>
        <td className="p-1 text-center font-bold text-[30px]">:</td>
        <td className="p-1 text-center font-bold text-[30px]">
          {timeLeft.seconds}
        </td>
      </thead>
      <tbody>
        <td className="p-1 text-center font-bold">jam</td>
        <td className="p-1 text-center font-bold"></td>
        <td className="p-1 text-center font-bold">menit</td>
        <td className="p-1 text-center font-bold"></td>
        <td className="p-1 text-center font-bold">detik</td>
      </tbody>
      <p>
        {/* {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s */}
      </p>
    </div>
  );
};

export default CountdownPembayaran;
