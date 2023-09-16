import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../store/AuthStore";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function SelectBranch() {
  const [dataCabang, setDataCabang] = useState([]);
  const user = useAuth((state) => state);
  console.log(user.checkCookieAvailable());
  const navigate = useNavigate();

  console.log(user);

  const GetDataCabang = () => {
    axios
      .get(`${import.meta.env.VITE_BACK_END_END_POINT_URL}/cabang`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      })
      .then(({ data }) => {
        console.log(data, "sampai sini");
        setDataCabang(data);
      });
  };

  useEffect(() => {
    if (user.checkCookieAvailable()) {
      if (user.isAuth && Object.keys(user.cabang).length !== 0) {
        navigate("/home");
        console.log("ke home");
      }
    } else {
      navigate("/login");
    }
    GetDataCabang();
  }, []);

  return (
    <section className=" h-[100vh] bg-gradient-to-r from-[#f1fff8] via-[#e6fff2] to-[#f1fff8]">
      <div className="flex h-full w-full justify-center items-center ">
        <div className="w-full p-5">
          <p className="mb-5 text-center font-semibold text-5xl text-gray-500">
            Pilih Cabang Asal :
          </p>
          <div className="grid grid-flow-col place-content-center gap-5">
            {dataCabang &&
              dataCabang.map((item) => (
                <Card
                  key={item.id}
                  imageName={item.logo}
                  cabangLembagaId={item.id}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ imageName, cabangLembagaId }) {
  const user = useAuth((state) => state);
  const navigate = useNavigate();

  const HandleCabang = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACK_END_END_POINT_URL}/user-cabang/create`,
        {
          uuid: user.uuid,
          cabang_lembaga_id: cabangLembagaId,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        navigate("/home");
        console.log(data);
      });
  };

  return (
    <>
      <button
        onClick={() => HandleCabang()}
        className="h-[200px] bg-white rounded-md shadow-lg hover:scale-110 active:scale-95 transition  duration-150 flex items-center p-2"
      >
        <img
          src={`${
            import.meta.env.VITE_BACK_END_END_POINT
          }/storage/${imageName}`}
          alt=""
          className="w-full h-full object-cover"
        />
      </button>
    </>
  );
}

export default SelectBranch;
