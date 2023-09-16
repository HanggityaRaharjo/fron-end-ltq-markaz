import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../layouts/Layout";
import DataTable from "react-data-table-component";
import { data } from "autoprefixer";
import axios from "axios";
import useAuth from "../../store/AuthStore";
import { useNavigate } from "react-router-dom";

function PilihProgram() {
    // const [stateLoadingData, setStateLoadingData] = useState(false);




    return (
        <Layout>
            <section className="p-5 bg-white shadow-md rounded-md">
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-xl">Pilih Program</h1>
                    <hr className="border-black" />
                    <p className="bg-[#5FB68A80] px-4 py-2 rounded-md">Hasil Placement test. Pilih waktu belajar</p>
                </div>

                <div className="mt-10">
                    <select name="" id="" className="w-full border border-gray-300 px-4 py-1 rounded-md">
                        <option value="">Pilih Program</option>
                        <option value="">Tartil</option>
                        <option value="">Tahsin</option>
                        <option value="">Tilawah</option>
                    </select>

                    <table className="w-full mt-5">
                        <thead>
                            <tr className="bg-[#5FB68A80] text-center">
                                <td className="px-4 py-2 w-8/12">Pilih Waktu</td>
                                <td className="px-4 py-2 ">Kuota</td>
                                <td className="px-4 py-2 ">Cheker</td>
                                <td className="px-4 py-2 ">status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className=" px-4 py-2 border text-left">sabtu, 07.00 - 09.00 WIB</td>
                                <td className=" px-4 py-2 border">8</td>
                                <td className=" px-4 py-2 border"><input type="radio" name="" id="" /></td>
                                <td className=" px-4 py-2 border">Ready</td>
                            </tr>
                            <tr className="text-center">
                                <td className=" px-4 py-2 border text-left">Sabtu, 09:00 - 11:00 WIB</td>
                                <td className=" px-4 py-2 border">full</td>
                                <td className=" px-4 py-2 border"><input type="radio" name="" id="" /></td>
                                <td className=" px-4 py-2 border">Waiting List</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end mt-5">
                    <button className="px-4 py-1 bg-[#169859] text-white rounded-md active:scale-95 duration-300">Lanjut</button>
                </div>
            </section>
        </Layout>
    );
}

// const LoaderData = () => {
//     return (
//         <div className="border h-56 flex justify-center items-center">
//             <div className="animate-pulse text-2xl">Loading...</div>
//         </div>
//     );
// };


export default PilihProgram;
