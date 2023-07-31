import React, { useState } from "react";
import Layout from "../../../layouts/Layout";
import { Link } from "react-router-dom";

const BiayaPendidikan = () => {
  return (
    <Layout>
      <section className="min-h-screen">
        <div className="h-20  bg-white rounded-full flex items-center justify-around shadow-lg mb-5">
          <StepNumber number={1} text="Biodata Siswa" status={false} />
          <StepArrow />
          <StepNumber number={2} text="Pilihan Program" status={false} />
          <StepArrow />
          <StepNumber number={3} text="Biaya Pendidikan" status={true} />
          <StepArrow />
          <StepNumber number={4} text="Placement Test" status={false} />
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg mb-5">
          <table className="w-full">
            <tbody>
              {/* Talaqqi */}
              <tr>
                <th className="border bg-green-700 text-white" colSpan={3}>
                  Talaqqi
                </th>
              </tr>
              <tr>
                <th className="border" colSpan={3}>
                  Pengajar : KH. Abdul Aziz Abdur Ra'uf, Lc., Alhafizh
                </th>
              </tr>
              <tr>
                <td className="border w-56">Pendaftaran</td>
                <td className="border"></td>
                <td className="border w-56">Rp. 100.000,-</td>
              </tr>
              <tr>
                <td className="border w-56">Pembangunan</td>
                <td className="border"></td>
                <td className="border w-56">Rp. 200.000,-</td>
              </tr>
              <tr>
                <td className="border w-56">Kegiatan</td>
                <td className="border"></td>
                <td className="border w-56">Rp. 150.000,-</td>
              </tr>
              <tr>
                <td className="border w-56">SPP</td>
                <td className="border"></td>
                <td className="border w-56">Rp. 450.000,-</td>
              </tr>
              <tr>
                <td className="border w-56">Buku</td>
                <td className="border"></td>
                <td className="border w-56">Rp. 0,-</td>
              </tr>
              {/* End Tallaqi */}
              {/* Talaqqi */}
              <tr>
                <th className="border bg-green-700 text-white" colSpan={3}>
                  Talaqqi
                </th>
              </tr>
              <tr>
                <th className="border" colSpan={3}>
                  Pengajar : KH. Abdul Aziz Abdur Ra'uf, Lc., Alhafizh
                </th>
              </tr>
              <tr>
                <td className="border w-56">Pendaftaran</td>
                <td className="border"></td>
                <td className="border w-56">Rp. 100.000,-</td>
              </tr>
              <tr>
                <td className="border w-56">Pembangunan</td>
                <td className="border"></td>
                <td className="border w-56">Rp. 200.000,-</td>
              </tr>
              <tr>
                <td className="border w-56">Kegiatan</td>
                <td className="border"></td>
                <td className="border w-56">Rp. 150.000,-</td>
              </tr>
              <tr>
                <td className="border w-56">SPP</td>
                <td className="border"></td>
                <td className="border w-56">Rp. 450.000,-</td>
              </tr>
              <tr>
                <td className="border w-56">Buku</td>
                <td className="border"></td>
                <td className="border w-56">Rp. 0,-</td>
              </tr>
              {/* End Tallaqi */}
              <tr>
                <th className="border w-56" colSpan={2}>
                  Total
                </th>

                <td className="border w-56">Rp. 0,-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-bold">Pembayaran</h4>
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-lg shadow-lg ">
            <div className="flex justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png"
                alt=""
                className="h-10"
              />
            </div>
            <div className="font-semibold text-center">
              <p>No Rekening : 842902380</p>
              <p className="text-center">(LTQ MARKAZ)</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg ">
            <div className="flex justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BRI_2020.svg/2560px-BRI_2020.svg.png"
                alt=""
                className="h-10"
              />
            </div>
            <div className="font-semibold text-center">
              <p>No Rekening : 842902380</p>
              <p className="text-center">(LTQ MARKAZ)</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg ">
            <div className="flex justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/BRI_Syariah.svg/1200px-BRI_Syariah.svg.png"
                alt=""
                className="h-10"
              />
            </div>
            <div className="font-semibold text-center">
              <p>No Rekening : 842902380</p>
              <p className="text-center">(LTQ MARKAZ)</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg ">
            <div className="flex justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/1200px-Bank_Mandiri_logo_2016.svg.png"
                alt=""
                className="h-10"
              />
            </div>
            <div className="font-semibold text-center">
              <p>No Rekening : 842902380</p>
              <p className="text-center">(LTQ MARKAZ)</p>
            </div>
          </div>
        </div>

        <div className="p-5 flex flex-col gap-5">
          <label htmlFor="">Masukan Foto Bukti Pembayaran</label>
          <input type="file" value="" />
        </div>

        <div className="flex justify-end gap-5 mt-5">
          <Link
            to={"/peserta-baru/pilihan-program"}
            type="submit"
            className="border border-[#169859] text-[#169859] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
          >
            Sebelumnya
          </Link>
          <Link
            to={"/placement-test"}
            className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
          >
            Selanjutnya
          </Link>
        </div>
      </section>
    </Layout>
  );
};

const CardProgram = () => {
  const [userCheck, setUserCheck] = useState(false);
  return (
    <div
      onClick={() => setUserCheck(!userCheck)}
      className="bg-white rounded-lg border  p-5 cursor-pointer relative"
      style={{ border: userCheck ? "1px solid #169859" : "1px solid white" }}
    >
      {userCheck ? (
        <div className="absolute top-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-[#169859]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      ) : null}
      <p className="text-2xl font-semibold">Tahsin Reguler</p>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
        est?
      </div>
    </div>
  );
};

const StepNumber = ({ number, text, status }) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className="w-14 h-14 bg-[] rounded-full flex justify-center items-center"
        style={{ backgroundColor: status ? "#169859" : "#16985940" }}
      >
        <span className="text-2xl font-bold text-[#f3faf6]">{number}</span>
      </div>
      <div>
        <p className="font-semibold">{text}</p>
      </div>
    </div>
  );
};

const StepArrow = () => {
  return (
    <div className="w-16 h-16  rounded-full flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </div>
  );
};

export default BiayaPendidikan;
