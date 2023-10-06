import React, { useEffect, useRef, useState } from "react";
import Layout from "../../../../layouts/Layout";
import {
  Breadcrumbs,
  BreadcrumbsActive,
  BreadcrumbsItem,
} from "../../../../components/breadcrumbs";
import { useReactToPrint } from "react-to-print";
import * as XLSX from "xlsx";
const CreateRancanganAnggaran = () => {
  const [totalSignature, setTotalSignature] = useState([
    { id: 1, element: <BoxSignature id={1} /> },
  ]);

  const componentRef = useRef();
  const HandleToExel = () => {
    const tableElement = document.getElementById("table-laporan");
    const ws = XLSX.utils.table_to_sheet(tableElement);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.xlsx";
    a.click();
    URL.revokeObjectURL(url);
  };
  const HandlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });

  const HandleTotalSignature = (total) => {
    console.log("sampe sini");
  };

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Keuangan</BreadcrumbsItem>
        <BreadcrumbsActive>Data Transaksi</BreadcrumbsActive>
      </Breadcrumbs>

      <section className="flex gap-5">
        <div
          ref={componentRef}
          id="table-laporan"
          className="w-[21cm] p-5 bg-white shadow min-h-[29.7cm]"
          style={{ fontFamily: `"Times New Roman", Times, serif` }}
        >
          {/* Kop */}
          <div className="py-2 flex items-center gap-5 px-10">
            <div className="w-40 h-40 border flex flex-col justify-center items-center">
              <label htmlFor="">Pilih Logo </label>
              <input type="file" className="text-xs w-[75px]" />
            </div>
            <div className="flex-1 flex-wrap">
              <h4
                className="text-2xl font-bold text-center"
                contentEditable={true}
              >
                LTQ MARKAZ INDONESIA
              </h4>
              <p contentEditable={true}>Jl.Margahayu Raya Bandung Jawa Barat</p>
              <p contentEditable={true}>Jl.Margahayu Raya Bandung Jawa Barat</p>
              <p contentEditable={true}>Jl.Margahayu Raya Bandung Jawa Barat</p>
            </div>
            <div className="w-40 h-40 border flex flex-col justify-center items-center">
              <label htmlFor="">Pilih Logo </label>
              <input type="file" className="text-xs w-[75px]" />
            </div>
          </div>
          <div className="border border-black h-1 bg-black mb-1"></div>
          <div className="border border-black h-[0.8] bg-black"></div>
          {/* End Kop */}
          <div className="py-8 text-center">
            <p className="text-2xl font-bold">Rancangan Anggaran Biaya</p>
          </div>

          <div className="px-20 py-5">
            <table contentEditable={true}>
              <tr>
                <td>Kegiatan</td>
                <td className="font-bold">: Example</td>
              </tr>
              <tr>
                <td>Waktu Pelaksanaan</td>
                <td>: Example asdasdasdasd asdasdas</td>
              </tr>
              <tr>
                <td>Tahun</td>
                <td>: 2023</td>
              </tr>
            </table>
          </div>

          <div className="py-5">
            <div className="border border-black p-[0.5px]">
              <table
                className="w-full border border-black"
                contentEditable={true}
              >
                <thead>
                  <tr>
                    <td className="border border-black w-12 text-center">
                      No.
                    </td>
                    <td className="border border-black">Uraian</td>
                    <td className="border border-black text-center">Volume</td>
                    <td className="border border-black w-64 text-center">
                      Harga (Satuan)
                    </td>
                    <td className="border border-black text-center">
                      Jumlah (Rp)
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {/* Data 1 */}
                  <tr className="border-t border-black">
                    <td className="border-x border-black w-12 px-1 ">I</td>
                    <td className="border-x border-black uppercase">
                      Lorem ipsum dolor sit,
                    </td>
                    <td className="border-x border-black w-20 text-center"></td>
                    <td className="border-x border-black text-center"></td>
                    <td className="border-x border-black text-center"></td>
                  </tr>
                  <tr>
                    <td className="border-x border-black w-12 px-1 text-right">
                      1
                    </td>
                    <td className="border-x border-black">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Veritatis, cupiditate.
                    </td>
                    <td className="border-x border-black w-20 text-center">
                      1 Buah
                    </td>
                    <td className="border-x border-black text-center">
                      Rp,5.000.000,-
                    </td>
                    <td className="border-x border-black text-center">
                      Rp,5.000.000,-
                    </td>
                  </tr>
                  <tr>
                    <td className="border-x border-black w-12 px-1 text-right">
                      2
                    </td>
                    <td className="border-x border-black">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Veritatis, cupiditate.
                    </td>
                    <td className="border-x border-black w-20 text-center">
                      1 Buah
                    </td>
                    <td className="border-x border-black text-center">
                      Rp,5.000.000,-
                    </td>
                    <td className="border-x border-black text-center">
                      Rp,5.000.000,-
                    </td>
                  </tr>
                  {/* Total */}
                  <tr className="border-t border-black">
                    <td className="border-x border-black w-12 px-1 text-right"></td>
                    <td className="border-x border-black"></td>
                    <td className="border-x border-black w-20 text-center"></td>
                    <td className="border-x border-black text-center">
                      Jumlah
                    </td>
                    <td className="border-x border-black text-center">
                      Rp,5.000.000,-
                    </td>
                  </tr>
                  {/* End Total */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Signature */}
          <div className="flex justify-around flex-wrap">
            {totalSignature.map((item) => item.element)}
          </div>
          {/* End Signature */}
        </div>
        {/* Tools */}
        <div className="flex-1 bg-white rounded-md shadow p-5 h-fit">
          <div className="">
            <div className="mb-5 flex flex-col gap-2">
              <label htmlFor="">Jumlah Tanda Tangan</label>
              <input
                type="number"
                min={1}
                max={10}
                className="border p-2 rounded-md w-full"
                defaultValue={1}
              />
            </div>
            <div className="mb-5 flex flex-col gap-2">
              <label htmlFor="">Posisi Logo Kop Surat</label>
              <select name="" id="" className="border p-2 rounded-md w-full">
                <option value="">kiri - kanan</option>
                <option value="">kiri</option>
                <option value="">kanan</option>
              </select>
            </div>
            <div className="mb-5 flex flex-col gap-2">
              <label htmlFor="">Nama Kegiatan</label>
              <input type="text" className="border p-2 rounded-md w-full" />
            </div>
            <div>
              <button
                onClick={HandlePrint}
                className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                <span>Cetak Print</span>
              </button>
            </div>
          </div>
        </div>
        {/* End Tools */}
      </section>
    </Layout>
  );
};

const BoxSignature = () => {
  return (
    <div className="text-center">
      <p>Bandung,1 Oktokber 2023</p>
      <p>LTQ MARKAZ INDONESIA</p>
      <div className="flex justify-center">
        <div className="w-40 h-40 border flex flex-col justify-center items-center">
          <label htmlFor="">Pilih Tanda Tangan</label>
          <input type="file" className="text-xs w-[75px]" />
        </div>
      </div>
      <p className="underline font-bold">Dadan Firmansyah</p>
      <p>Direktur</p>
    </div>
  );
};

export default CreateRancanganAnggaran;
