import { useState } from 'react';
import React from 'react'
import Layout from '../../../layouts/Layout'

function UserRole() {

    return (
        <Layout>
            <section className='p-5 bg-white'>
                <div className="container mx-auto p-4">
                    <h1 className="text-xl font-bold mb-4">User Role</h1>
                    <div>
                        <Table data={data} />
                    </div>
                    <div className='flex justify-end mt-10'>
                        <button className='bg-[#169859] text-sm text-[#f3faf6] p-1 w-20 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                            <span>Save</span>
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
];

const Table = ({ data }) => {
    return (
        <table className="w-full border-collapse border">
            <thead>
                <tr>
                    <th className="border p-2 ">ID</th>
                    <th className="border p-2 w-[300px]">Name</th>
                    <th className="border p-2 w-[60px]">Admin</th>
                    <th className="border p-2 w-[60px]">TU</th>
                    <th className="border p-2 w-[60px]">Guru</th>
                    <th className="border p-2 w-[60px]">Price</th>
                    <th className="border p-2 w-[60px]">Price</th>
                    <th className="border p-2 w-[60px]">Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td className="border p-2 w-[15px]">{item.id}</td>
                        <td className="border p-2 ">{item.name}</td>
                        <td className="border p-2 text-center"><input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-indigo-600"
                        /></td>
                        <td className="border p-2  text-center"><input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-indigo-600"
                        /></td>
                        <td className="border p-2  text-center"><input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-indigo-600"
                        /></td>
                        <td className="border p-2  text-center"><input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-indigo-600"
                        /></td>
                        <td className="border p-2 text-center"><input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-indigo-600"
                        /></td>
                        <td className="border p-2  text-center"><input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-indigo-600"
                        /></td>
                    </tr>
                ))}
            </tbody>

        </table>
    );
};

export default UserRole

