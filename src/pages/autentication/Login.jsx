import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutAutentication from "../../layouts/LayoutAutentication";
import axios from "axios";
import useAuth from "../../store/AuthStore";
import Cookies from "js-cookie";

function Login() {
  const user = useAuth((state) => state);
  const [isAuthSuccess, setIsAuthSuccess] = useState(true);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.checkCookieAvailable()) {
      navigate("/home");
    }
  }, [user.isAuth, user.isLoading]);

  const HandleSubmitLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("sampe sini");
    axios
      .post(`${import.meta.env.VITE_BACK_END_END_POINT_URL}/login`, {
        email: event.target["email"].value,
        password: event.target["password"].value,
      })
      .then(({ data }) => {
        Cookies.set("access_token", data.access_token, { expires: 24 });
        user.HandleMe(Cookies.get("access_token"));
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          setIsAuthSuccess(false);
        }
        setIsLoading(false);
      });
  };

  const HandleIsLogin = () => {};

  return (
    <>
      <LayoutAutentication>
        <div className="bg-white shadow  rounded-md relative p-5 w-[500px] min-h-[420px] text-gray-500">
          <div
            className="border border-[#ffefe7]  bg-[#fcf6f3] text-[#eb5757] rounded-md  absolute p-5 left-0 -top-20 w-full transition-all duration-150"
            style={{ opacity: isAuthSuccess ? "0" : "1" }}
          >
            <div>
              <p>Email & Password yang anda Masukan salah</p>
              <button
                className="absolute top-2 right-2"
                onClick={() => setIsAuthSuccess(true)}
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
          <h1 className="text-center text-[#169859] text-[30px] font-bold mb-5">
            Masuk
          </h1>
          <div className="flex justify-center">
            <div className="w-7/12">
              <form onSubmit={HandleSubmitLogin}>
                <div className="flex flex-col mb-5">
                  <label>Email</label>
                  <input
                    name="email"
                    type="text"
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none transition duration-300"
                    placeholder="Masukan Email"
                  />
                </div>
                <div className="flex flex-col mb-5 relative">
                  <label>Password</label>
                  <input
                    name="password"
                    type={isShowPassword ? "text" : "password"}
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none transition duration-300"
                    placeholder="Masukan Password"
                  />
                  <div
                    className="absolute right-2 top-1/2 cursor-pointer"
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
                      <span>Masuk</span>
                    </button>
                  )}
                </div>
                <div className="p-2">
                  <p className="text-sm font-semibold text-center">
                    Belum punya akun?{" "}
                    <Link to={"/register"} className="text-[#169859] pl-2">
                      Daftar
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </LayoutAutentication>
    </>
  );
}

export default Login;
