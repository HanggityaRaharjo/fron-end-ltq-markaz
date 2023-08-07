import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../layouts/Layout";
import DataTable from "react-data-table-component";
import { data } from "autoprefixer";
import axios from "axios";
import useAuth from "../../store/AuthStore";
import { useNavigate } from "react-router-dom";

function PilihProgram() {
    // Pura pura dari cabang ltq
    const cabang_id = 1;
    const navigate = useNavigate();
    const [stateLoadingData, setStateLoadingData] = useState(false);
    const [records, setRecords] = useState(data);
    const [dataProgram, setDataProgram] = useState([]);

    function handleFilter(event) {
        const newData = data.filter((row) =>
            row.program.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setRecords(newData);
    }

    useEffect(() => {
        axios
            .get("http://192.168.43.81:8000/api/program", {
                headers: {
                    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC40My44MTo4MDAwL2FwaS9sb2dpbiIsImlhdCI6MTY5MTI0NTY0NCwiZXhwIjo2MTY5MTI0NTU4NCwibmJmIjoxNjkxMjQ1NjQ0LCJqdGkiOiJzVTUyYU5hSnprUUZHMWVKIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJyb2xlcyI6WyJhZG1pbmNhYmFuZyJdfQ._2usbQH10LtAhc9o3EhwDJdoFqcellQ2hGJYl9k8Lg0`,
                },
            })
            .then(({ data }) => {

                setDataProgram(data);
                // console.log(data[0].programharga.id, 'sampe di get data');
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const HandleTambahProgram = (e) => {
        e.preventDefault();
        console.log(e.target["program"].value, 'sampai sini');

        const programs = e.target["program"].value;
        const program = programs.split("-");
        const proram_id = program[0];
        const program_harga_id = program[1];

        axios
            .post(
                "http://192.168.43.81:8000/api/user-program/create",
                {
                    uuid: "19d7cb21-3dfd-482e-8bb3-e776b600e407",
                    program_id: proram_id,
                    program_harga_id: program_harga_id,
                },
                {
                    headers: {
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC40My44MTo4MDAwL2FwaS9sb2dpbiIsImlhdCI6MTY5MTI1NzYzMCwiZXhwIjo2MTY5MTI1NzU3MCwibmJmIjoxNjkxMjU3NjMwLCJqdGkiOiJBazNXWk54Nm96Uk42YnRlIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJyb2xlcyI6WyJhZG1pbmNhYmFuZyJdfQ.yG-ZE748T8Mh_I8KTGjXW8z294qk7uY25092sktKvz8`,
                    },
                }
            )
            .then((response) => {
                console.log(response);
                navigate("/pembayaran");
            });
    };

    const FormatTanggal = (tanggal) => {
        const tanggalObj = new Date(tanggal);
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        const tanggalLengkap = tanggalObj.toLocaleDateString("id-ID", options);
        return tanggalLengkap;
    };

    return (
        <Layout>
            <section className="p-5 bg-white min-w-screen">
                <div className="mb-10">
                    <h1 className="font-bold">Jadwal Kelas</h1>
                </div>
                <div className="bg-white shadow-md min-h-[224px]">
                    <div className="text-end">
                        <input
                            type="text"
                            onChange={handleFilter}
                            className=" border border-gray-300 p-1"
                            placeholder="Search..."
                        />
                    </div>

                    {/* tabel */}

                    {
                        dataProgram.length != 0 ? <form onSubmit={(e) => HandleTambahProgram(e)}>
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="font-semibold p-2 border w-10">No</th>
                                        <th className="font-semibold p-2 border">nama program</th>
                                        <th className="font-semibold p-2 border">Hari</th>
                                        <th className="font-semibold p-2 border">Jam</th>
                                        <th className="font-semibold p-2 border">Pilihan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataProgram &&
                                        dataProgram.map((item, index) => (
                                            <tr key={item.id}>
                                                <td className="p-2 border w-10 text-center">{index + 1}</td>
                                                <td className="p-2 border text-center">
                                                    {item.program_name}
                                                </td>
                                                <td className="p-2 border text-center">
                                                    {FormatTanggal(item.program_day.date_start)}
                                                </td>
                                                <td className="p-2 border text-center">
                                                    {item.program_day.jam}
                                                </td>
                                                <td className="p-2 border text-center">
                                                    <input type="radio" name="program" value={`${item.id}-${item.programharga.id}`} />


                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                            {/* end tabel */}

                            <div className="flex justify-end mt-5">
                                <button
                                    type="submit"
                                    className="bg-[#169859] text-sm mr-5 mb-5 text-[#f3faf6] p-1 w-20 rounded-sm font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                                >
                                    <span>tambah</span>
                                </button>
                            </div>
                        </form> : <LoaderData />
                    }
                </div>
            </section>
        </Layout>
    );
}

const LoaderData = () => {
    return (
        <div className="border h-56 flex justify-center items-center">
            <div className="animate-pulse text-2xl">Loading...</div>
        </div>
    );
};


export default PilihProgram;
