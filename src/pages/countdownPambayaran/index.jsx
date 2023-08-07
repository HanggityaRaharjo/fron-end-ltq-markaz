import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout'
import bank from '../../assets/logo/BCA.png'
import copy from "copy-to-clipboard";




function CountdownPembayaran() {
    const targetTime = new Date().getTime() + 1 * 30 * 60 * 1000;

    return <Layout>
        <section className='min-h-screen bg-white flex justify-center items-center font-poppins'>
            <div className='h-auto w-[500px] rounded-lg shadow-lg px-5 border'>
                <div className='flex justify-center'>
                    <div className='text-center mt-2'>
                        <h1 className='font-bold text-[20px]'>Segera selesaikan pembayaran</h1>
                        <h1 className='font-bold text-[20px]'>Anda sebelum waktu habis</h1>
                        <div className='mt-2'>
                            <hr className='border-[1px] border-gray-300' />
                        </div>
                    </div>
                </div>

                {/* countdown */}
                <div className='flex justify-center mt-10'>
                    <div className=''>
                        <h1 className=''>sisa waktu pembayaran anda</h1>
                        <div className='flex justify-center'>
                            <CountdownTimer targetTime={targetTime} />
                        </div>
                    </div>
                </div>
                {/* end countdown */}

                {/* tabel */}
                <div className='mt-10'>
                    <table>
                        <tr>
                            <td className='p-2 font-semibold'>Nama</td>
                            <td className='p-2'>:</td>
                            <td className='p-2'>ujang</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-semibold'>Program</td>
                            <td className='p-2'>:</td>
                            <td className='p-2'>Talaqi</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-semibold'>Tanggal</td>
                            <td className='p-2'>:</td>
                            <td className='p-2'>2023-08-06T18:45:39.000000Z</td>
                        </tr>
                    </table>
                </div>

                {/* end tabel */}

                <div className='mt-4'>
                    <hr className='border-[1px] border-gray-300' />
                </div>

                <div className='mt-2'>
                    <div className='mt-2'>
                        <h1>Transfer pembayaran ke nomor rekening</h1>
                        <div className='grid grid-cols-2'>
                            <div className='h-[100px] w-[180px]'>
                                <img src={bank} alt="" className='h-full w-full' />
                            </div>
                            <div className='flex items-center'>
                                <div>
                                    <p className=''>No Rek : <span>xxxxxxxxxx</span></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h1>Upload bukti pembayaran</h1>
                    <input
                        type="file"
                        name=""
                        id=""
                        style={{ fontSize: '12px', color: '#333' }}
                        className='border border-gray-400 w-[210px]' />
                </div>
                <div className='pt-10 mb-5'>
                    <button className='bg-[#169859] text-sm text-[#f3faf6] p-1 w-full rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                        <span>Kirim</span>
                    </button>
                </div>
            </div>

        </section>
    </Layout>
}




const CountdownTimer = ({ targetTime }) => {
    const calculateTimeLeft = () => {
        const difference = targetTime - new Date().getTime();
        if (difference <= 0) {
            return { hours: 0, minutes: 0, seconds: 0 };
        }

        // const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <thead>
                <td className='p-1 text-center font-bold text-[30px]'>{timeLeft.hours}</td>
                <td className='p-1 text-center font-bold text-[30px]'>:</td>
                <td className='p-1 text-center font-bold text-[30px]'>{timeLeft.minutes}</td>
                <td className='p-1 text-center font-bold text-[30px]'>:</td>
                <td className='p-1 text-center font-bold text-[30px]'>{timeLeft.seconds}</td>
            </thead>
            <tbody>
                <td className='p-1 text-center font-bold'>jam</td>
                <td className='p-1 text-center font-bold'></td>
                <td className='p-1 text-center font-bold'>menit</td>
                <td className='p-1 text-center font-bold'></td>
                <td className='p-1 text-center font-bold'>detik</td>
            </tbody>
            <p>
                {/* {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s */}
            </p>
        </div>
    );
};

export default CountdownPembayaran;