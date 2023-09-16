import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";

const PlacementTest = () => {
  return (
    <Layout>
      <section className=" text-[#333333]">
        <div className="grid grid-cols-2 gap-5 text-sm">
          <div className=" bg-white rounded-lg shadow-lg p-5 relative">
            <h3 className="text-2xl font-semibold">Upload Rekaman Suara</h3>
            <p className="mb-5">
              Anda diminta untuk melakukan recording suara dari surah yang kami
              berikan,anda dapat merekam nya menggunakan alat perekam apapun dan
              mengupload file nya atau langsung rekam di aplikasi
            </p>
            <div className="flex items-end gap-5">
              <div className="text-white  bg-[#169859] p-1 rounded-md">
                <label htmlFor="">Klik Untuk Upload File</label>
                <input
                  type="file"
                  className=" w-full cursor-pointer rounded-md"
                />
              </div>
              <div className=" ">
                <button className="border border-[#169859] w-32  text-[#169859] p-2  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95 flex justify-center">
                  Kirim
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-lg shadow-lg p-5 relative">
            <h3 className="text-2xl font-semibold">Soal Pilihan Ganda</h3>
            <p className="mb-5">
              Anda diminta untuk mengerjakan beberapa soal yang akan kami
              berikan,pastikan untuk koneksi internet anda lancar selama
              pengerjaan
            </p>
            <div className="flex justify-center absolute bottom-5 right-5">
              <Link
                to={"/placement-test/pilihan-ganda"}
                className="border border-[#169859] w-32  text-[#169859] p-2  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95 flex justify-center"
              >
                <span>Mulai</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
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

export default PlacementTest;
