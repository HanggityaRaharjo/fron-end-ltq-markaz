import React from "react";
import LayoutAutentication from "../../layouts/LayoutAutentication";
import { Link } from "react-router-dom";

function Register() {
  return (
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
              <h1 className="py-2">Username</h1>
              <input type="text" className="w-full h-9 bg-slate-100" />
            </div>
            <div>
              <h1 className="py-2">Email</h1>
              <input type="text" className="w-full h-9 bg-slate-100" />
            </div>
            <div className="mt-2">
              <h1 className="py-2">Password</h1>
              <input type="password" className="w-full h-9 bg-slate-100" />
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <button className="p-2 w-24 bg-[#169859] text-white rounded-full ">
                <span>
                  <Link to="/home">Create</Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutAutentication>
  );
}

export default Register;
