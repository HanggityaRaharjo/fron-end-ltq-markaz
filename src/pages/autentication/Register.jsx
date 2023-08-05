import { React, useState } from "react";
import LayoutAutentication from "../../layouts/LayoutAutentication";
import axios from "axios";


function Register() {
  const HandleSubmitRegister = (event) => {
    event.preventDefault();
    // console.log(event.target['username'].value);
    // console.log(event.target['email'].value);
    // console.log(event.target['password'].value);
    axios.post('http://192.168.43.81:8000/api/register', {
      name: event.target['username'].value,
      email: event.target['email'].value,
      password: event.target['password'].value
    }).then((response) => {
      console.log(response);
    })

    console.log("sampai sini");
  }

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
            <form onSubmit={HandleSubmitRegister} method="post">
              <div>
                <h1 className="py-2">Username</h1>
                <input
                  type="text"
                  name="username"
                  className="w-full h-9 bg-slate-100"
                />
              </div>
              <div>
                <h1 className="py-2">Email</h1>
                <input
                  type="text"
                  name="email"
                  className="w-full h-9 bg-slate-100"
                />
              </div>
              <div className="mt-2">
                <h1 className="py-2">Password</h1>
                <input
                  type="password"
                  name="password"
                  className="w-full h-9 bg-slate-100"
                />
              </div>
              <div className="flex justify-end gap-2 mt-5">
                <button type="submit" className="bg-[#169859] text-[#f3faf6] p-2 w-32 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                  <span>Create</span>
                </button>
                <button className="bg-[#169859] text-[#f3faf6] p-2 w-32 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                  <span>login</span>

                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutAutentication >
  );
}

export default Register;
