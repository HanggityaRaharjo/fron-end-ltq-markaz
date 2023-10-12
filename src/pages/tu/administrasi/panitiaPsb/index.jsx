import React from "react";
import Layout from "../../../../layouts/Layout";

function PanitiaPsb() {
  const participants = [
    {
      nama: "Peserta 1",
      rekamanSuara: "Baik",
      pengerjaanSoal: "85",
      hasilAkhir: "Lolos",
    },
    {
      nama: "Peserta 2",
      rekamanSuara: "Cukup",
      pengerjaanSoal: "60",
      hasilAkhir: "Tidak Lolos",
    },
    // Tambahkan data peserta lainnya sesuai kebutuhan
  ];

  return (
    <Layout>
      <section className="P-5">
        <div className="min-h-screen p-4">
          <h1 className="text-2xl font-semibold mb-4">Seleksi Peserta</h1>
          <div className="bg-white mt-5 shadow-lg">
            <ParticipantTable participants={participants} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

const ParticipantTable = ({ participants }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="bg-black text-white">
          <th className="px-4 py-2">Nama Peserta</th>
          <th className="px-2 py-2">Hasil Rekaman Suara</th>
          <th className="px-4 py-2">Pengerjaan Soal</th>
          <th className="px-4 py-2">Hasil Akhir</th>
        </tr>
      </thead>
      <tbody>
        {participants.map((participant, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{participant.nama}</td>
            <td className="border px-4 py-2">{participant.rekamanSuara}</td>
            <td className="border px-4 py-2">{participant.pengerjaanSoal}</td>
            <td className="border px-4 py-2">
              <select name="" id="" className="w-full">
                <option value="">Lolos</option>
                <option value="">Tidak Lolos</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PanitiaPsb;
