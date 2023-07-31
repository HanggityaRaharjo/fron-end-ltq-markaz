import React, { useState } from "react";
import Layout from "../../../layouts/Layout";
import { Link } from "react-router-dom";

const PilihanGanda = () => {
  const [numberQuestion, setnumberQuestion] = useState(1);
  const questionData = [
    {
      nomor: 1,
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
    dicta voluptatibus fuga labore quo in perferendis odit
    blanditiis quasi atque?`,
      answer: "a",
    },
    {
      nomor: 2,
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
    dicta voluptatibus fuga labore quo in perferendis odit
    blanditiis quasi atque?`,
      answer: "a",
    },
    {
      nomor: 3,
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
    dicta voluptatibus fuga labore quo in perferendis odit
    blanditiis quasi atque?`,
      answer: "a",
    },
    {
      nomor: 4,
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
    dicta voluptatibus fuga labore quo in perferendis odit
    blanditiis quasi atque?`,
      answer: "a",
    },
    {
      nomor: 5,
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
    dicta voluptatibus fuga labore quo in perferendis odit
    blanditiis quasi atque?`,
      answer: "a",
    },
    {
      nomor: 6,
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
    dicta voluptatibus fuga labore quo in perferendis odit
    blanditiis quasi atque?`,
      answer: "a",
    },
    {
      nomor: 7,
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
    dicta voluptatibus fuga labore quo in perferendis odit
    blanditiis quasi atque?`,
      answer: "a",
    },
    {
      nomor: 8,
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
    dicta voluptatibus fuga labore quo in perferendis odit
    blanditiis quasi atque?`,
      answer: "a",
    },
    {
      nomor: 9,
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
    dicta voluptatibus fuga labore quo in perferendis odit
    blanditiis quasi atque?`,
      answer: "a",
    },
    {
      nomor: 10,
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
    dicta voluptatibus fuga labore quo in perferendis odit
    blanditiis quasi atque?`,
      answer: "a",
    },
  ];

  return (
    <Layout>
      <section className="min-h-[80vh]">
        <div className="flex">
          <div className="w-9/12">
            <div className="bg-green-700 p-2 w-fit text-white rounded-t-lg">
              Soal Ujian
            </div>
            <div className="p-5 bg-green-300 rounded-lg rounded-tl-none rounded-br-none shadow-lg  h-full">
              <p className="bg-green-700 p-2 rounded-t-lg w-fit text-white">
                No {numberQuestion}
              </p>
              <div className="p-5 bg-green-700 rounded-b-lg text-white mb-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  dicta voluptatibus fuga labore quo in perferendis odit
                  blanditiis quasi atque?
                </p>
              </div>

              <div className="flex flex-col gap-5 mb-5">
                {/* Option */}
                <div className="border border-green-700 rounded-lg flex overflow-hidden flex-wrap gap-5">
                  <div className="w-[5%] flex justify-center bg-green-700 p-2 text-white">
                    A.
                  </div>
                  <div className="w-[90%] flex items-center">Jawaban</div>
                </div>
                {/* End Option */}
                {/* Option */}
                <div className="border border-green-700 rounded-lg flex overflow-hidden flex-wrap gap-5">
                  <div className="w-[5%] flex justify-center bg-green-700 p-2 text-white">
                    B.
                  </div>
                  <div className="w-[90%] flex items-center">Jawaban</div>
                </div>
                {/* End Option */}
                {/* Option */}
                <div className="border border-green-700 rounded-lg flex overflow-hidden flex-wrap gap-5">
                  <div className="w-[5%] flex justify-center bg-green-700 p-2 text-white">
                    C.
                  </div>
                  <div className="w-[90%] flex items-center">Jawaban</div>
                </div>
                {/* End Option */}
                {/* Option */}
                <div className="border border-green-700 rounded-lg flex overflow-hidden flex-wrap gap-5">
                  <div className="w-[5%] flex justify-center bg-green-700 p-2 text-white">
                    D.
                  </div>
                  <div className="w-[90%] flex items-center">Jawaban</div>
                </div>
                {/* End Option */}
              </div>
              {/* Next */}
              <div className="flex justify-end gap-5">
                {numberQuestion != 1 ? (
                  <button
                    onClick={() => setnumberQuestion(numberQuestion - 1)}
                    className="py-2 px-4 rounded-lg text-white bg-green-700"
                  >
                    Sebelumnya
                  </button>
                ) : null}
                <button
                  onClick={() => setnumberQuestion(numberQuestion + 1)}
                  className="py-2 px-4 rounded-lg text-white bg-green-700"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>
          <div className="w-3/12 ">
            <div className="flex">
              <div className="border border-green-700 p-2 w-fit text-green-700 rounded-t-lg">
                Soal Ujian
              </div>
              <div
                className="border border-green-700 p-2 w-32 text-green-700 rounded-t-lg flex justify-center"
                id="timer"
              >
                05 : 00
              </div>
            </div>
            <div className="bg-green-500 h-full rounded-r-lg">
              <div className="bg-gray-300 h-12 flex justify-center items-center">
                <p>Navigasi Soal(10 Soal)</p>
              </div>
              <div className="grid grid-cols-4 p-5 gap-5">
                {questionData.map((item, index) =>
                  item.nomor == numberQuestion ? (
                    <div className="w-10 h-10 bg-green-800 text-white flex justify-center items-center">
                      {item.nomor}
                    </div>
                  ) : (
                    <button onClick={() => setnumberQuestion(item.nomor)}>
                      <div className="w-10 h-10 bg-green-400 text-white flex justify-center items-center">
                        {item.nomor}
                      </div>
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Question = ({ question }) => {
  return <div className="mb-5">{question}</div>;
};
const Answer = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <input type="radio" /> A. option A
      </div>
      <div>
        <input type="radio" /> B. option B
      </div>
      <div>
        <input type="radio" /> C. option C
      </div>
      <div>
        <input type="radio" /> D. option D
      </div>
    </div>
  );
};

const ContainerQuestion = ({ children, number }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 flex mb-5">
      <div className="w-5 text-center">{number}.</div>
      <div className="flex flex-col w-full">{children}</div>
    </div>
  );
};

export default PilihanGanda;
