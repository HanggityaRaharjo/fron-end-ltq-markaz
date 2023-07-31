import { React, useState } from "react";
import Layout from "../../../layouts/Layout";

const data = [
  {
    id: 1,
    name: "John Doe",
    selected: false,
  },
  {
    id: 2,
    name: "Jane Smith",
    selected: false,
  },
  {
    id: 3,
    name: "Bob Johnson",
    selected: false,
  },
  // Tambahkan data lainnya sesuai kebutuhan
];

function SelectRole() {
  const [rows, setRows] = useState(data);

  const handleCheckboxChange = (id, checkboxName) => {
    setRows(
      rows.map((row) => {
        if (row.id === id) {
          return { ...row, [checkboxName]: !row[checkboxName] };
        }
        return row;
      })
    );
  };

  return (
    <Layout>
      <section className="bg-white p-5 font-poppins">
        <div>
          <h2>Daftar Pengguna</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Option 1</th>
                <th>Option 2</th>
                <th>Option 3</th>
                <th>Option 4</th>
                <th>Option 5</th>
                {/* Tambahkan kolom opsi tambahan di sini */}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td className="flex justify-center w-full">{row.id}</td>
                  <td>{row.name}</td>
                  <td className="w-20">
                    <input
                      className="scale-125 flex justify-center w-full"
                      type="checkbox"
                      checked={row.option1}
                      onChange={() => handleCheckboxChange(row.id, "option1")}
                    />
                  </td>
                  <td className="w-20">
                    <input
                      className="scale-125 flex justify-center w-full"
                      type="checkbox"
                      checked={row.option2}
                      onChange={() => handleCheckboxChange(row.id, "option2")}
                    />
                  </td>
                  <td className="w-20">
                    <input
                      className="scale-125 flex justify-center w-full"
                      type="checkbox"
                      checked={row.option3}
                      onChange={() => handleCheckboxChange(row.id, "option3")}
                    />
                  </td>
                  <td className="w-20">
                    <input
                      className="scale-125 flex justify-center w-full"
                      type="checkbox"
                      checked={row.option4}
                      onChange={() => handleCheckboxChange(row.id, "option4")}
                    />
                  </td>
                  <td className="w-20 ">
                    <input
                      className="scale-125 flex justify-center w-full"
                      type="checkbox"
                      checked={row.option5}
                      onChange={() => handleCheckboxChange(row.id, "option5")}
                    />
                  </td>
                  {/* Tambahkan kolom opsi tambahan di sini */}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-20">
            <button className="bg-[#169859] text-[#f3faf6] p-2 w-32 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
              <span>Save</span>
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default SelectRole;
