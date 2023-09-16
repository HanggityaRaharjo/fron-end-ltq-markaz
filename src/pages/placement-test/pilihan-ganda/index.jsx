import React, { useEffect, useState } from "react";
import Layout from "../../../layouts/Layout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import useAuth from "../../../store/AuthStore";

const PilihanGanda = () => {
  const [examPgData, setExamPgData] = useState([]);
  const [currentShowQuestion, setCurrentShowQuestion] = useState(0);
  const [totalSoal, setTotalSoal] = useState(0);
  const [userSelectOption, setUserSelectOption] = useState([]);
  const [isExamStart, setIsExamStart] = useState(true);
  const [examName, setExamName] = useState("");
  const user = useAuth((state) => state);

  console.log(userSelectOption);
  const GetExamData = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/exam-type/show/placement-test`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        setExamName(data.type_exam);
        setExamPgData(data.exampg);
        setTotalSoal(data.exampg.length);
        let structureSelectUser = [];
        data.exampg.map((item, index) => {
          structureSelectUser.push({
            true_answer: item.true_answer,
            select: "",
          });
        });
        setUserSelectOption(structureSelectUser);
      });
  };

  const navigate = useNavigate();
  const HandlePostPlacementTest = () => {
    const structurePost = {
      uuid: user.uuid,
      soal: userSelectOption,
    };

    axios
      .post(
        `${import.meta.env.VITE_BACK_END_END_POINT_URL}/user-level/create`,
        structurePost,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        // navigate("/home");
      });
  };

  useEffect(() => {
    GetExamData();
  }, []);

  return (
    <Layout>
      <ModalEndedExam isExamStart={isExamStart} />
      <section className="min-h-[80vh]">
        <div className="flex">
          <div className="w-9/12">
            <div className="bg-[#169859] p-2 w-fit text-white rounded-t-lg">
              {examName}
            </div>
            {examPgData &&
              examPgData.map((item, index) => (
                <BoxQuestion
                  key={index}
                  userSelectOption={userSelectOption}
                  setUserSelectOption={setUserSelectOption}
                  currentShowQuestion={currentShowQuestion}
                  setCurrentShowQuestion={setCurrentShowQuestion}
                  index={index}
                  data={item}
                  totalSoal={totalSoal}
                />
              ))}
          </div>
          <div className="w-3/12 ">
            <div className="flex w-full">
              <div className="border w-full  p-2 text-white bg-[#169859] rounded-t-lg flex justify-center">
                <CountdownTimer
                  isExamStart={isExamStart}
                  setIsExamStart={setIsExamStart}
                  HandlePostPlacementTest={HandlePostPlacementTest}
                />
              </div>
            </div>
            <div className="bg-green-100 h-full rounded-r-lg relative">
              <div className="bg-gray-300 h-12 flex justify-center items-center">
                <p>Navigasi Soal({totalSoal} Soal)</p>
              </div>
              <div className="grid grid-cols-4 p-5 gap-5">
                {examPgData &&
                  examPgData.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentShowQuestion(index)}
                      className="bg-[#169859] text-[#f3faf6] p-2 w-10 h-10  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
                    >
                      {index + 1}
                    </button>
                  ))}
              </div>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 ">
                <button
                  className="bg-[#169859] text-[#f3faf6] p-2 w-32  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
                  onClick={() => HandlePostPlacementTest()}
                >
                  <span>Selesai</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const ModalEndedExam = ({ isExamStart }) => {
  return (
    <div
      className="fixed w-screen h-screen left-0 top-0 z-[1000] bg-black bg-opacity-10 justify-center items-center"
      style={{ display: isExamStart ? "none" : "flex" }}
    >
      <div className="bg-white p-5 rounded-md shadow-md">
        <h4 className="text-center font-semibold text-2xl">UJIAN BERAKHIR</h4>
        <img src="/animate/choose-animate.svg" alt="" className="w-96" />
        <div className="flex justify-center">
          <button className="bg-[#169859] w-48 text-[#f3faf6] p-2  rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
            <span>OK</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const CountdownTimer = ({
  isExamStart,
  setIsExamStart,
  HandlePostPlacementTest,
}) => {
  const initialSeconds = 300; // 5 menit
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    // Memeriksa apakah waktu hitung mundur telah mencapai 0
    if (seconds === 0) {
      setIsExamStart(false);
      HandlePostPlacementTest();
      return;
    }

    // Membuat interval hitung mundur
    const countdownInterval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Membersihkan interval ketika komponen dibongkar
    return () => clearInterval(countdownInterval);
  }, [seconds]);

  // Fungsi untuk mengonversi detik menjadi format menit:detik
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>{formatTime(seconds)}</h1>
    </div>
  );
};

const BoxQuestion = ({
  currentShowQuestion,
  setCurrentShowQuestion,
  index,
  data,
  totalSoal,
  userSelectOption,
  setUserSelectOption,
}) => {
  const HandleSelectUser = (option) => {
    const updatedOptions = [...userSelectOption];
    updatedOptions[index].select = option;
    setUserSelectOption(updatedOptions);
  };

  if (currentShowQuestion == index) {
    return (
      <div className="px-5 py-2 bg-white rounded-md rounded-t-none rounded-br-none shadow text-[#333333] h-full">
        <p className="py-2 w-fit font-bold">No {index + 1}</p>
        {/* Soal */}
        <div className="font-semibold rounded-b-lg  mb-5">
          <p>{data.question}</p>
        </div>
        {/* Soal */}
        {/* Opsi Jawaban */}
        <div className="flex flex-col gap-5 mb-5 font-semibold">
          {/* Option A*/}
          <div
            className={`${
              userSelectOption[index].select === "a" ? "bg-green-200" : ""
            }  flex overflow-hidden flex-wrap gap-5 cursor-pointer hover:bg-green-100 transition duration-300`}
            onClick={() => HandleSelectUser("a")}
          >
            <div className="w-[5%] flex justify-center bg-[#169859] p-2 text-white">
              A.
            </div>
            <div className="w-[90%] flex items-center">{data.option_a}</div>
          </div>
          {/* End Option A*/}
          {/* Option B*/}
          <div
            className={`${
              userSelectOption[index].select === "b" ? "bg-green-200" : ""
            }  flex overflow-hidden flex-wrap gap-5 cursor-pointer hover:bg-green-100 transition duration-300`}
            onClick={() => HandleSelectUser("b")}
          >
            <div className="w-[5%] flex justify-center bg-[#169859] p-2 text-white">
              B.
            </div>
            <div className="w-[90%] flex items-center">{data.option_b}</div>
          </div>
          {/* End Option B*/}
          {/* Option C*/}
          <div
            className={`${
              userSelectOption[index].select === "c" ? "bg-green-200" : ""
            }  flex overflow-hidden flex-wrap gap-5 cursor-pointer hover:bg-green-100 transition duration-300`}
            onClick={() => HandleSelectUser("c")}
          >
            <div className="w-[5%] flex justify-center bg-[#169859] p-2 text-white">
              C.
            </div>
            <div className="w-[90%] flex items-center">{data.option_c}</div>
          </div>
          {/* End Option C*/}
          {/* Option D*/}
          <div
            className={`${
              userSelectOption[index].select === "d" ? "bg-green-200" : ""
            }  flex overflow-hidden flex-wrap gap-5 cursor-pointer hover:bg-green-100 transition duration-300`}
            onClick={() => HandleSelectUser("d")}
          >
            <div className="w-[5%] flex justify-center bg-[#169859] p-2 text-white">
              D.
            </div>
            <div className="w-[90%] flex items-center">{data.option_d}</div>
          </div>
          {/* End Option D*/}
          {/* Option E*/}
          <div
            className={`${
              userSelectOption[index].select === "e" ? "bg-green-200" : ""
            }  flex overflow-hidden flex-wrap gap-5 cursor-pointer hover:bg-green-100 transition duration-300`}
            onClick={() => HandleSelectUser("e")}
          >
            <div className="w-[5%] flex justify-center bg-[#169859] p-2 text-white">
              E.
            </div>
            <div className="w-[90%] flex items-center">{data.option_e}</div>
          </div>
          {/* End Option E*/}
        </div>
        {/* End Opsi Jawaban*/}
        {/* Next */}
        <div className="flex justify-end gap-5">
          {currentShowQuestion <= 0 ? (
            <button className="py-2 px-4 rounded-md text-white bg-gray-400">
              Sebelumnya
            </button>
          ) : (
            <button
              onClick={() => setCurrentShowQuestion(currentShowQuestion - 1)}
              className="py-2 px-4 rounded-md text-white bg-[#169859]"
            >
              Sebelumnya
            </button>
          )}

          {currentShowQuestion < totalSoal - 1 ? (
            <button
              onClick={() => setCurrentShowQuestion(currentShowQuestion + 1)}
              className="py-2 px-4 rounded-md text-white bg-[#169859]"
            >
              Selanjutnya
            </button>
          ) : (
            <button
              className="py-2 px-4 rounded-md text-white bg-gray-400"
              disabled
            >
              Selanjutnya
            </button>
          )}
        </div>
      </div>
    );
  }
};

export default PilihanGanda;
