import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../../layouts/Layout";
import DataTable from "react-data-table-component";
import axios from "axios";

function OtoritasMenu() {
  const [dataShow, setDataShow] = useState([]);

  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
      minWidth: "100px",
      width: "100px",
    },
    {
      name: "Nama",
      selector: (row) => row.name,
      sortable: true,
      minWidth: "400px",
      width: "400px",
    },
    {
      name: "menu1",
      selector: (row) => row.menu,
      sortable: true,
      cell: (row) => <Switch />,
      minWidth: "200px",
      width: "100px",
    },
    {
      name: "menu2",
      selector: (row) => row.menu,
      sortable: true,
      cell: (row) => <Switch />,
      minWidth: "200px",
      width: "100px",
    },
    {
      name: "menu3",
      selector: (row) => row.menu,
      sortable: true,
      cell: (row) => <Switch />,
      minWidth: "200px",
      width: "100px",
    },
    {
      name: "menu3",
      selector: (row) => row.menu,
      sortable: true,
      cell: (row) => <Switch />,
      minWidth: "200px",
      width: "100px",
    },
    {
      name: "menu3",
      selector: (row) => row.menu,
      sortable: true,
      cell: (row) => <Switch />,
      minWidth: "200px",
      width: "100px",
    },
  ];

  const data = [
    {
      no: 1,
      name: "fulan",
    },
    {
      no: 2,
      name: "fulan2",
    },
    {
      no: 3,
      name: "fulan3",
    },
  ];

  useEffect(() => {
    axios.get("http://192.168.43.81:8000/api/biodata", {}).then((response) => {
      console.log(response.data.Data);
      setDataShow(response.data.Data);
    });
  }, []);

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter((row) =>
      row.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecords(newData);
  }

  return (
    <Layout>
      <section className="p-5 font-poppins bg-white">
        <div className="container mx-auto p-4">
          <h1 className="text-xl font-bold mb-4">Otoritas Menu</h1>
        </div>
        <div className="text-end">
          <input
            type="text"
            onChange={handleFilter}
            className=" border border-gray-300 p-1"
            placeholder="Search..."
          />
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          <table className="w-full x">
            <thead>
              <td className="p-2 font-semibold text-center border">No</td>
              <td className="p-2 font-semibold text-center border">Nama</td>
              <td className="p-2 font-semibold text-center border">Menu 1</td>
              <td className="p-2 font-semibold text-center border">Menu 2</td>
              <td className="p-2 font-semibold text-center border">Menu 3</td>
              <td className="p-2 font-semibold text-center border">Menu 4</td>
            </thead>
            <tbody>
              {dataShow &&
                dataShow.map((item, index) => (
                  <tr>
                    <td className="p-2 border  ">{index + 1}</td>
                    <td className="p-2 border  ">{item.full_name}</td>
                    <td className="p-2 border  ">
                      <Switch />
                    </td>
                    <td className="p-2 border  ">
                      <Switch />
                    </td>
                    <td className="p-2 border  ">
                      <Switch />
                    </td>
                    <td className="p-2 border  ">
                      <Switch />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* <DataTable columns={columns} data={records}></DataTable> */}
        <div className="flex justify-end mt-10 pr-2">
          <button className="bg-[#169859] text-sm text-[#f3faf6] p-1 w-20 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
            <span>Save</span>
          </button>
        </div>
      </section>
    </Layout>
  );
}

function Switch() {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <label className="flex items-center">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isEnabled}
          onChange={handleToggle}
        />
        <div
          className={`${
            isEnabled ? "bg-[#169859]" : "bg-gray-300"
          } w-10 h-6 rounded-full shadow-inner transition-all duration-300`}
        ></div>
        <div
          className={`${
            isEnabled ? "translate-x-6" : "translate-x-1"
          } absolute left-0 w-4 h-4 top-1 bg-white rounded-full shadow transform transition-all duration-300`}
        ></div>
      </div>
      {/* <span className="ml-2">{isEnabled ? 'Enabled' : 'Disabled'}</span> */}
    </label>
  );
}

export default OtoritasMenu;
