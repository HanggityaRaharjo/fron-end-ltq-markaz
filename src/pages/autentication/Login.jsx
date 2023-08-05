import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutAutentication from "../../layouts/LayoutAutentication";
import axios from "axios";
import useAuth from "../../store/AuthStore";
import Cookies from "js-cookie"


function Login() {
  const user = useAuth((state) => state);
  const navigate = useNavigate();
  console.log(user, "ini di store");

  const jwtToken = Cookies.get("jwt_token");
  useEffect(() => {
    user.authToken === "" ? null : navigate('/home');
  }, []);


  const HandleSubmitLogin = (event) => {
    event.preventDefault();
    axios.post('http://192.168.43.81:8000/api/login', {
      email: event.target['email'].value,
      password: event.target['password'].value
    })
      .then(({ data }) => {
        user.setToken(data.access_token);
        console.log('ini di axios', data);

        user.HandleMe(data.access_token);
        navigate('/pilihcabang')
        // console.log(user);
        // console.log(data);
      }).catch((error) => console.log(error.message));

    console.log("sampai sini");
  }


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
              <form onSubmit={HandleSubmitLogin}>
                <div>
                  <h1>Email</h1>
                  <input type="text" name="email" className="w-full h-9 bg-slate-100" />
                </div>
                <div className="mt-2">
                  <h1>Password</h1>
                  <input type="password" name="password" className="w-full h-9 bg-slate-100" />
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
                  <button
                    type='submit'
                    className="bg-[#169859] text-[#f3faf6] p-2 w-32 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                  >
                    <span>Login</span>
                  </button>
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
