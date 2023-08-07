import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../store/AuthStore";
import { useNavigate } from "react-router-dom";

function Card({ imageName, cabangLembagaId }) {
  const user = useAuth((state) => state);
  console.log(imageName);
  const navigate = useNavigate();

  const HandleCabang = () => {
    console.log(cabangLembagaId);
    axios
      .post(
        "http://192.168.43.81:8000/api/user-cabang/create",
        {
          uuid: "c7e4e49f-fa3e-4507-a523-81656c9a5aa1",
          cabang_lembaga_id: cabangLembagaId,
        },
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC40My44MTo4MDAwL2FwaS9sb2dpbiIsImlhdCI6MTY5MTMwNDEzOCwiZXhwIjo2MTY5MTMwNDA3OCwibmJmIjoxNjkxMzA0MTM4LCJqdGkiOiJ4ZUNLRlRzMmVWbWczRktVIiwic3ViIjoiOCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJyb2xlcyI6W119.TSwD4KAZGb9hHB8Ch2bACJylqj5Dr3VxSBXGNM8NkMA`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        navigate("/home");
      });
  };

  return (
    <button
      onClick={() => HandleCabang()}
      className="h-[200px] w-[200px] bg-white rounded-lg shadow-lg hover:scale-110 active:scale-95 transition  duration-150 flex items-center p-2"
    >
      <img
        src={`http://192.168.43.81:8000/storage/${imageName}`}
        alt=""
        className="w-full h-full object-cover"
      />
    </button>
  );
}

function SelectBranch() {
  const [dataCabang, setDataCabang] = useState([]);
  const user = useAuth((state) => state);

  useEffect(() => {
    axios
      .get("http://192.168.43.81:8000/api/cabang", {
        headers: {
          Authorization: `Bearer ${user.authToken}`,
        },
      })
      .then(({ data }) => {
        setDataCabang(data.data);
        console.log(data.data, "sampai sini");
      });
  }, []);

  console.log(dataCabang);

  return (
    <section className=" h-[100vh] bg-gradient-to-r from-[#f1fff8] via-[#e6fff2] to-[#f1fff8]">
      <div className="flex h-full justify-center items-center ">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-5">
          {dataCabang &&
            dataCabang.map((item) => (
              <div key={item.id}>
                <Card imageName={item.logo} cabangLembagaId={item.id} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default SelectBranch;
