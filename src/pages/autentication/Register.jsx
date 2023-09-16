import { React, useEffect, useState } from "react";
import LayoutAutentication from "../../layouts/LayoutAutentication";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Register() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isShowConfirmationPassword, setIsShowConfirmationPassword] =
    useState(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const navigate = useNavigate();
  let { slug_cabang } = useParams();
  const [dataCabang, setDataCabang] = useState({});

  const HandleSubmitRegister = (event) => {
    event.preventDefault();
    setIsLoading(true);

    let passwordSame = IsPasswordSame(
      event.target["password"].value,
      event.target["password_confirmation"].value
    );

    if (!passwordSame) {
      setShowErrorMessage("Password & Konfirmasi Password Tidak Sama");
    } else {
      axios
        .post(`${import.meta.env.VITE_BACK_END_END_POINT_URL}/register`, {
          name: event.target["username"].value,
          email: event.target["email"].value,
          password: event.target["password"].value,
          cabang_id: dataCabang.id,
        })
        .then((response) => {
          console.log(response);
          setIsRegisterSuccess(true);
          setIsLoading(false);
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        });
    }

    setIsLoading(false);
  };

  const IsPasswordSame = (passwordValue, passwordConfirmationValue) => {
    if (passwordValue === passwordConfirmationValue) {
      return true;
    }
    return false;
  };

  const getCabangBySlug = () => {
    console.log("sampe sini", slug_cabang);
    axios
      .get(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/cabang/by-slug/${slug_cabang}`
      )
      .then(({ data }) => {
        setDataCabang(data);
      });
  };

  useEffect(() => {
    getCabangBySlug();
  }, []);

  return (
    <LayoutAutentication>
      {Object.keys(dataCabang).length !== 0 ? (
        <div className="bg-white shadow  rounded-md relative p-5 w-[500px] text-gray-500">
          <div
            className="border  bg-[#ff3410cb] text-white rounded-md  absolute p-5 left-0 -top-20 w-full transition-all duration-150"
            style={{ opacity: showErrorMessage === "" ? "0" : "1" }}
          >
            <div>
              <p>{showErrorMessage}</p>
              <button
                className="absolute top-2 right-2"
                onClick={() => setShowErrorMessage("")}
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
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
            </div>
          </div>

          <AlertSuccess isRegisterSuccess={isRegisterSuccess} />

          <div className="border rounded-md shadow h-24 mb-5 flex justify-center items-center">
            <img
              src={`${import.meta.env.VITE_BACK_END_END_POINT}/storage/${
                dataCabang.logo
              }`}
              alt=""
              className="h-24"
            />
          </div>

          <h1 className="text-center text-[#169859] text-[30px] font-bold mb-2">
            Daftar{" "}
            {Object.keys(dataCabang).length !== 0
              ? dataCabang.nama_cabang
              : null}
          </h1>

          <div className="flex justify-center text-gray-500">
            <div className="w-full md:w-8/12">
              <form onSubmit={HandleSubmitRegister} method="post">
                <div className="flex flex-col mb-5">
                  <label>Nama</label>
                  <input
                    name="username"
                    type="text"
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none transition duration-300"
                    placeholder="Masukan nama"
                  />
                </div>
                <div className="flex flex-col mb-5">
                  <label>Email </label>
                  <input
                    name="email"
                    type="text"
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none transition duration-300"
                    placeholder="Masukan email"
                  />
                </div>
                <div className="flex flex-col mb-5 relative">
                  <label>Password </label>
                  <input
                    name="password"
                    type={isShowPassword ? "text" : "password"}
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none transition duration-300"
                    placeholder="Masukan Password"
                  />
                  <div
                    className="absolute right-2 top-1/2 cursor-pointer"
                    type="button"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  >
                    {isShowPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="flex flex-col mb-5 relative">
                  <label>Konfirmasi Password </label>
                  <input
                    name="password_confirmation"
                    type={isShowConfirmationPassword ? "text" : "password"}
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none transition duration-300"
                    placeholder="Masukan Password"
                  />

                  <div
                    className="absolute right-2 top-1/2 cursor-pointer"
                    onClick={() =>
                      setIsShowConfirmationPassword(!isShowConfirmationPassword)
                    }
                    type="button"
                  >
                    {isShowConfirmationPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="flex">
                  {isLoading ? (
                    <button
                      type="button"
                      disabled
                      className="bg-[#169859] animate-pulse text-[#f3faf6] p-2 w-full  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
                    >
                      <span>Loading</span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-[#169859] text-[#f3faf6] p-2 w-full  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
                    >
                      <span>Daftar</span>
                    </button>
                  )}
                </div>
                <div className="p-2">
                  <p className="text-sm font-semibold text-center">
                    Sudah punya akun?
                    <Link to={"/login"} className="text-[#169859] pl-2">
                      Masuk
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow p-5 h-[620px] w-[500px] rounded-md relative">
          <div className="bg-gray-200 h-20 animate-pulse mb-5"></div>
          <div className="bg-gray-200 h-10 animate-pulse mb-5"></div>
          <div className="bg-gray-200 h-96 animate-pulse mb-5"></div>
        </div>
      )}
    </LayoutAutentication>
  );
}

const AlertSuccess = ({ isRegisterSuccess }) => {
  return (
    <div
      className="h-full fixed left-0 top-0 w-full bg-black bg-opacity-10  z-50 transition-all duration-150"
      style={{ display: isRegisterSuccess ? "block" : "none" }}
    >
      <div className="border flex justify-center items-center w-full h-full">
        <div className="border  bg-[#169859] text-white rounded-md p-5 min-w-[00px]">
          <p>Sukses Berhasil Daftar</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
