import { React, useState } from "react";
import LayoutAutentication from "../../layouts/LayoutAutentication";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    axios
      .post(
        "https://ltqmarkaz.000webhostapp.com/api/register",
        {
          name: username,
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(username);
  };

  const handleLogin = () => {
    axios
      .post(
        "https://ltqmarkaz.000webhostapp.com/api/login",
        {
          email: "agus3@gmail.com",
          password: "qwe123",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(username);
  };

  const handleCekLogin = () => {
    const accessToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2x0cW1hcmthei4wMDB3ZWJob3N0YXBwLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE2OTA2NDkzMDUsImV4cCI6NjE2OTA2NDkyNDUsIm5iZiI6MTY5MDY0OTMwNSwianRpIjoieXN0QnZjVFNrcU5oVnBleCIsInN1YiI6IjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.iNg6y1UcOaY9zYoiTJ-Mquh3LYdUUkbjRmRB803A6kw";

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    axios
      .get("https://ltqmarkaz.000webhostapp.com/api/me", config)
      .then((response) => {
        console.log(response.data); // Tangani respons di sini
      })
      .catch((error) => {
        console.error(error); // Tangani kesalahan di sini
      });
  };

  return (
    <LayoutAutentication>
      <div className="w-10/12  bg-white shadow-lg p-5 rounded-lg">
        {/* <div className="h-[200px] w-{200px}">
                <img src={logo} alt="" className="h-full w-full" />
              </div> */}
        <h1 className="text-center text-[#169859] text-[30px] font-bold">
          REGISTER
        </h1>
        <div className="flex justify-center">
          <div className="w-7/12">
            <div>
              <h1 className="py-2">Username</h1>
              <input
                type="text"
                name="username"
                className="w-full h-9 bg-slate-100"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <h1 className="py-2">Email</h1>
              <input
                type="text"
                name="email"
                className="w-full h-9 bg-slate-100"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <h1 className="py-2">Password</h1>
              <input
                type="password"
                name="password"
                className="w-full h-9 bg-slate-100"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <button
                onClick={() => handleRegister()}
                className="bg-[#169859] text-[#f3faf6] p-2 w-32 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                <span>Create</span>
              </button>
              <button
                onClick={() => handleCekLogin()}
                className="bg-[#169859] text-[#f3faf6] p-2 w-32 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                <span>cek login</span>
              </button>
              <button
                onClick={() => handleLogin()}
                className="bg-[#169859] text-[#f3faf6] p-2 w-32 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                <span>login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutAutentication>
  );
}

export default Register;
