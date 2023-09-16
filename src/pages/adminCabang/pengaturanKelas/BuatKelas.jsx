import React, { useEffect, useState } from "react";
import Layout from "../../../layouts/Layout";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsActive,
} from "../../../components/breadcrumbs";
import axios from "axios";
import Cookies from "js-cookie";

function BuatKelas() {
  const [classroomData, setClassroomData] = useState([]);
  const [userData, setUserData] = useState([]);

  const GetDataPeserta = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/admincabang/status/user/active`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    GetDataPeserta();
  }, []);

  console.log(classroomData, "sampe sini");

  const HandleSubmitKelas = (e) => {
    e.preventDefault();
    let dataClass = {
      nama_kelas: e.target["nama_kelas"].value,
      code: e.target["code"].value,
      nama_pengajar: e.target["pengajar"].value,
      user_id: 1,
      jumlah_peserta: e.target["kuota"].value,
      peserta: classroomData,
    };

    axios
      .post(
        `${import.meta.env.VITE_BACK_END_END_POINT_URL}/api/kelas/create`,
        dataClass,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const HandleDeleteUserFromClass = (userToDeleteFromClass) => {
    const updatedData = classroomData.filter(
      (item) => item.name !== userToDeleteFromClass
    );
    setClassroomData(updatedData);
  };

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Pengaturan</BreadcrumbsItem>
        <BreadcrumbsItem>Kelas</BreadcrumbsItem>
        <BreadcrumbsActive>Buat</BreadcrumbsActive>
      </Breadcrumbs>
      <section>
        <div className="p-5 bg-white shadow rounded-md">
          <form action="" method="post" onSubmit={(e) => HandleSubmitKelas(e)}>
            <div className="grid grid-cols-4 gap-5 mb-5">
              <FormInput name="nama_kelas" title="Nama Kelas" />
              <FormInput name="code" title="Code" />
              <FormInput name="pengajar" title="Pengajar" />
              <FormInput name="kuota" title="Kuota" />
            </div>
            <div className="flex gap-5">
              <div className="w-1/2 flex justify-center">Peserta</div>
              <div className="w-1/2 flex justify-center">Kelas</div>
            </div>
            <div className="flex gap-5">
              <div className="w-1/2 flex">
                <input
                  type="text"
                  className=" border border-gray-300 p-2 rounded-md w-full rounded-b-none"
                  placeholder="search..."
                />
              </div>
              <div className="w-1/2 flex">
                <input
                  type="text"
                  className=" border border-gray-300 p-2 rounded-md w-full rounded-b-none"
                  placeholder="search..."
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-1/2 h-96 border rounded-md rounded-t-none p-5 overflow-y-scroll">
                {userData &&
                  userData.map((item, index) => (
                    <UserData
                      key={index}
                      nama={item.name}
                      classData={classroomData}
                      HandlePush={setClassroomData}
                      id={item.id}
                    />
                  ))}
              </div>
              {/* Class */}
              <div className="w-1/2 h-96 border rounded-md rounded-t-none p-5 overflow-y-scroll">
                {classroomData &&
                  classroomData.map((item, index) => (
                    <div
                      key={index}
                      className="border-b hover:bg-[#1698591e] p-2 h-14 flex justify-between items-center"
                    >
                      {item.name}
                      <button
                        className="text-red-500 p-2 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                        onClick={() => HandleDeleteUserFromClass(item.name)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
              </div>
              {/* End Class */}
            </div>
            <div className="flex justify-end gap-5 mt-5">
              <button
                type="submit"
                className="bg-[#169859] text-[#f3faf6] p-2 w-32  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
              >
                <span>Simpan</span>
              </button>
              <button className="border border-[#169859] w-32  text-[#169859] p-2  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95">
                <span>Batal</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

const UserData = ({ nama, classData, HandlePush, id }) => {
  let status = classData.some((item) => item.name === nama);

  const HandlePushToClass = () => {
    let isNameExists = classData.some((item) => item.name === nama);
    !isNameExists
      ? HandlePush([...classData, { name: nama, user_id: id }])
      : null;
  };

  return (
    <button
      className="border-b hover:bg-[#1698591e] p-3 h-14 flex items-center justify-between w-full"
      onClick={HandlePushToClass}
    >
      {nama}

      {status ? (
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
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ) : null}
    </button>
  );
};

const FormInput = ({ name, title }) => {
  return (
    <div className="flex flex-col">
      <label className="bg-[#2f3a4e] text-[#f3faf6] px-2 rounded-t-lg  w-40">
        {title}
      </label>
      <input
        name={name}
        type="text"
        className=" w-full border border-[#2f3a4e]  px-5 h-10 rounded-md rounded-tl-none"
        placeholder="Type here.."
      />
    </div>
  );
};

export default BuatKelas;
