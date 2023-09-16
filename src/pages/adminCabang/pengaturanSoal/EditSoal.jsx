import React, { useEffect, useState } from "react";
import Layout from "../../../layouts/Layout";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsActive,
} from "../../../components/breadcrumbs";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function EditSoal() {
  const [typeExam, setTypeExam] = useState("");
  const [codeExam, setCodeExam] = useState("");
  const [arraySoal, setArraySoal] = useState([]);
  let { id } = useParams();

  const HandleAddSoal = () => {
    setArraySoal([
      ...arraySoal,
      {
        option_a: "",
        option_b: "",
        option_c: "",
        option_d: "",
        option_e: "",
        question: "",
        true_answer: "",
      },
    ]);
  };

  const HandleChangeSoal = (index, key, value) => {
    const updatedArray = [...arraySoal];
    updatedArray[index][key] = value;
    setArraySoal(updatedArray);
  };

  const HandleSaveToDatabase = () => {
    let dataExam = {
      type_exam: typeExam,
      code: codeExam,
      soal: arraySoal,
    };

    axios
      .post(
        `${import.meta.env.VITE_BACK_END_END_POINT_URL}/exampg/update/${id}`,
        dataExam,
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

  console.log(arraySoal, "ini array nya");

  const GetDataExamTypeById = (id) => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/superadmin/exam-type/get/${id}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        setCodeExam(data.code);
        setTypeExam(data.type_exam);
        setArraySoal(data.exampg);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    GetDataExamTypeById(id);
  }, []);

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Pengaturan</BreadcrumbsItem>
        <BreadcrumbsItem>Soal</BreadcrumbsItem>
        <BreadcrumbsActive>Edit Soal {codeExam}</BreadcrumbsActive>
      </Breadcrumbs>
      <section>
        <div>
          <div className=" grid grid-cols-3 gap-5 mb-5 bg-white shadow rounded-md  font-poppins p-5">
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                Jenis Ujian
              </label>
              <input
                name="jenis_ujian"
                type="text"
                className=" w-full border border-[#169859]  px-5 h-10 rounded-md rounded-tl-none"
                placeholder="Type here.."
                onChange={(e) => setTypeExam(e.target.value)}
                defaultValue={typeExam}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                Code Soal
              </label>
              <input
                name="code_soal"
                type="text"
                className=" w-full border border-[#169859]  px-5 h-10 rounded-md rounded-tl-none"
                placeholder="Type here.."
                onChange={(e) => setCodeExam(e.target.value)}
                defaultValue={codeExam}
                required
              />
            </div>
          </div>

          <div className="bg-white shadow rounded-md font-poppins p-5">
            {/* {stateSoal.map((boxInput, index) => (
            <div key={index}>{boxInput}</div>
          ))} */}
            {arraySoal.map((item, index) => (
              <BoxInputSoal
                key={index}
                number={index + 1}
                index={index}
                data={item}
                HandleChangeSoal={HandleChangeSoal}
              />
            ))}
            <div className="flex justify-center gap-5">
              <button
                onClick={() => HandleAddSoal()}
                type="button"
                className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                <span>Tambah Soal</span>
              </button>
              <button
                type="button"
                onClick={() => HandleSaveToDatabase()}
                className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                <span>Simpan</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const BoxInputSoal = ({ number, HandleChangeSoal, index, data }) => {
  return (
    <div className=" relative mb-5" id={`soal-${number}`}>
      <p className="font-semibold absolute">{number}.</p>
      <button
        type="button"
        className="absolute right-0 bg-[#169859] text-[#f3faf6] p-2 w-10 h-10 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
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
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
      <div className="ml-5 pr-10">
        <div className="px-2">
          {/* Soal */}
          <textarea
            defaultValue={data.question}
            id=""
            cols="30"
            rows="10"
            placeholder="Soal"
            onChange={(e) =>
              HandleChangeSoal(index, "question", e.target.value)
            }
            className="w-full border border-[#169859]  p-5 h-32 rounded-md"
            required
          ></textarea>
          {/* End Soal */}
          {/* Option */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label htmlFor="" className="font-semibold">
                A.
              </label>
              <input
                type="text"
                placeholder="Opsi A"
                defaultValue={data.option_a}
                onChange={(e) =>
                  HandleChangeSoal(index, "option_a", e.target.value)
                }
                className="w-full border border-[#169859]  px-5 h-10 rounded-md"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="" className="font-semibold">
                B.
              </label>
              <input
                type="text"
                placeholder="Opsi B"
                defaultValue={data.option_b}
                onChange={(e) =>
                  HandleChangeSoal(index, "option_b", e.target.value)
                }
                className="w-full border border-[#169859]  px-5 h-10 rounded-md"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="" className="font-semibold">
                C.
              </label>
              <input
                type="text"
                placeholder="Opsi C"
                defaultValue={data.option_c}
                onChange={(e) =>
                  HandleChangeSoal(index, "option_c", e.target.value)
                }
                className="w-full border border-[#169859]  px-5 h-10 rounded-md"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="" className="font-semibold">
                D.
              </label>
              <input
                type="text"
                placeholder="Opsi D"
                defaultValue={data.option_d}
                onChange={(e) =>
                  HandleChangeSoal(index, "option_d", e.target.value)
                }
                className="w-full border border-[#169859] px-5 h-10 rounded-md"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="" className="font-semibold">
                E.
              </label>
              <input
                type="text"
                placeholder="Opsi E"
                defaultValue={data.option_e}
                onChange={(e) =>
                  HandleChangeSoal(index, "option_e", e.target.value)
                }
                className="w-full border border-[#169859] px-5 h-10 rounded-md"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <select
                onChange={(e) =>
                  HandleChangeSoal(index, "true_answer", e.target.value)
                }
                id=""
                className="w-full border border-[#169859] px-5 h-10 rounded-md"
                defaultValue={data.true_answer}
                required
              >
                <option value="" disabled>
                  -- Jawaban Benar --
                </option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
                <option value="e">E</option>
              </select>
            </div>
          </div>
          {/* End Option */}
        </div>
      </div>
    </div>
  );
};

export default EditSoal;
