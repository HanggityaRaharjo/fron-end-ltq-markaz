import React from 'react'
import { useState } from 'react';
import Layout from '../../../layouts/Layout'



function OtoritasMenu() {

    return (
        <Layout>
            <section className='p-5 font-poppins bg-white'>
                <div className="container mx-auto p-4">
                    <h1 className="text-xl font-bold mb-4">Otoritas Menu</h1>
                </div>
                <Table data={data} />
                <div className='flex justify-end mt-10 pr-2'>
                    <button className='bg-[#169859] text-sm text-[#f3faf6] p-1 w-20 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                        <span>Save</span>
                    </button>
                </div>
            </section>
        </Layout>
    )
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
                    className={`${isEnabled ? 'bg-[#169859]' : 'bg-gray-300'
                        } w-10 h-6 rounded-full shadow-inner transition-all duration-300`}
                ></div>
                <div
                    className={`${isEnabled ? 'translate-x-6' : 'translate-x-1'
                        } absolute left-0 w-4 h-4 top-1 bg-white rounded-full shadow-md transform transition-all duration-300`}
                ></div>
            </div>
            <span className="ml-2">{isEnabled ? 'Enabled' : 'Disabled'}</span>
        </label>
    );
};


const data = [
    { id: 1, name: 'Admin', price: 10 },
    { id: 2, name: 'Guru', price: 20 },
    { id: 3, name: 'Tu', price: 30 },
    { id: 4, name: 'Peserta', price: 40 },
];
const Table = ({ data }) => {
    return (
        <table className="w-full border-collapse border">
            <thead>
                <tr>
                    <th className="border p-2 w-[10px]">ID</th>
                    <th className="border p-2 w-[350px]">Name</th>
                    <th className="border p-2 w-[150px]">menu1</th>
                    <th className="border p-2 w-[150px]">menu2</th>
                    <th className="border p-2 w-[150px]">menu3</th>
                    <th className="border p-2 w-[150px]">menu4</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td className="border p-2">{item.id}</td>
                        <td className="border p-2">{item.name}</td>
                        <td className="border p-2"><Switch /></td>
                        <td className="border p-2"><Switch /></td>
                        <td className="border p-2"><Switch /></td>
                        <td className="border p-2"><Switch /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default OtoritasMenu