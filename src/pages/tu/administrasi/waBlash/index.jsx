import React from 'react'
import Layout from '../../../../layouts/Layout'

function WaBlash() {
    return (
        <Layout>
            <section className='p-5'>
                <div>
                    <WhatsAppBlastForm />
                </div>
            </section>
        </Layout>
    )
}

const WhatsAppBlastForm = () => {
    return (
        <div className="p-8 w-full mx-auto bg-white rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">WhatsApp Blast Form</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your message..."
                    ></textarea>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#169859] text-white rounded hover:bg-[#169859b8] focus:outline-none"
                    >
                        Send Blast
                    </button>
                </div>
            </form>
        </div>
    );
};


export default WaBlash