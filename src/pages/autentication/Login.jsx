import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LayoutAutentication from "../../layouts/LayoutAutentication";
import { login } from "../../services/auth.services";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch(
        "https://ltqmarkaz.000webhostapp.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      if (!response.ok) {
        throw new Error("Login gagal");
      }

      const data = await response.json();
      console.log("Respon dari server:", data);
      // Lakukan aksi lain setelah login berhasil, misalnya menyimpan token atau mengarahkan ke halaman lain
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
      // Lakukan penanganan kesalahan lainnya
    }
  };

  return (
    <>
      <LayoutAutentication>
        <div className="w-10/12  bg-white shadow-lg p-5 rounded-lg">
          {/* <div className="h-[200px] w-{200px}">
                <img src={logo} alt="" className="h-full w-full" />
            </div> */}
          <h1 className="text-center text-[#169859] text-[30px] font-bold">
            LOGIN
          </h1>
          <div className="flex justify-center">
            <div className="w-7/12">
              <div>
                <h1>Username</h1>
                <input
                  type="text"
                  className="w-full h-10 p-2 rounded-lg bg-slate-100"
                  placeholder="type here"
                />
              </div>
              <div className="mt-2">
                <h1>Password</h1>
                <input
                  type="password"
                  className="w-full h-10 p-2 rounded-lg bg-slate-100"
                  placeholder="type here"
                />
              </div>
              <div className="p-2">
                <p className="text-xs">
                  Apakah sudah punya akun?{" "}
                  <Link to={"/register"} className="text-blue-500 pl-2">
                    Buat Akun
                  </Link>
                </p>
              </div>
              <div className="flex justify-end gap-2 mt-5">
                <Link
                  to={"/home"}
                  className="bg-[#169859] text-[#f3faf6] p-2 w-full rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                >
                  Masuk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </LayoutAutentication>
    </>
  );
}

export default Login;
