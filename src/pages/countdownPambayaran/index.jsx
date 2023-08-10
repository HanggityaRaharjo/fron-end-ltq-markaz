import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout'
import bank from '../../assets/logo/BCA.png'
import copy from "copy-to-clipboard";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function CountdownPembayaran() {
    const targetTime = new Date().getTime() + 1 * 30 * 60 * 1000;
    const [dataPembayaran, setDataPemayaran] = useState([]);
    const navigate = useNavigate();


    console.log(dataPembayaran, 'ini pembayaran');
    useEffect(() => {
        axios.get(`http://192.168.43.81:8000/api/program-pembayaran/show/`, {
            headers: {
                Aututhentication: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC40My44MTo4MDAwL2FwaS9sb2dpbiIsImlhdCI6MTY5MTI0NTY0NCwiZXhwIjo2MTY5MTI0NTU4NCwibmJmIjoxNjkxMjQ1NjQ0LCJqdGkiOiJzVTUyYU5hSnprUUZHMWVKIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJyb2xlcyI6WyJhZG1pbmNhYmFuZyJdfQ._2usbQH10LtAhc9o3EhwDJdoFqcellQ2hGJYl9k8Lg0`
            }
        }).then(({ data }) => {
            console.log(data, "halo");
            setDataPemayaran(data);
        })
    }, [])



    const HandleSubmitPembayaran = (e) => {
        e.preventDefault();

        // console.log(dataPembayaran);

        axios.post('http://192.168.43.81:8000/api/verifikasi-pembayaran/create', {
            uuid: 'c7e4e49f-fa3e-4507-a523-81656c9a5aa1',
            bukti_pembayaran: e.target['bukti_pembayaran'].files[0]
        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC40My44MTo4MDAwL2FwaS9sb2dpbiIsImlhdCI6MTY5MTI0NTY0NCwiZXhwIjo2MTY5MTI0NTU4NCwibmJmIjoxNjkxMjQ1NjQ0LCJqdGkiOiJzVTUyYU5hSnprUUZHMWVKIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJyb2xlcyI6WyJhZG1pbmNhYmFuZyJdfQ._2usbQH10LtAhc9o3EhwDJdoFqcellQ2hGJYl9k8Lg0 `,
            }
        }).then((response) => {
            console.log(response, 'berhasil');
            navigate('/status-pembayaran')
        })
    }

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

                {
                    Object.keys(dataPembayaran).length === 0 ? ' ' :
                        <div className='mt-10 mb-10'>
                            <div className='mt-2'>
                                <div className='flex justify-center'>
                                    <div className='h-[100px] w-[180px]'>
                                        {/* <img src={`http://192.168.43.81:8000/storage/${dataPembayaran.pembayaran.type_bank}`} alt="" className='h-full w-full' /> */}
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='text-center'>
                                        <h1>Total pembayaran</h1>
                                        <div className='p-2 w-[300px] border border-gray-400'>
                                            <p>{dataPembayaran.total}</p>
                                            {/* {dataPembayaran.pembayaran.type_bank} */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center mt-10'>
                                    <div className='text-center'>
                                        <h1>Nomor Rekening</h1>
                                        <div className='p-1 w-[300px] border border-gray-400'>
                                            <p>{dataPembayaran.norek}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                }


                <form method='post' onSubmit={(e) => HandleSubmitPembayaran(e)}>
                    <div className='mt-5'>
                        <h1>Upload bukti pembayaran</h1>
                        <input
                            type="file"
                            name="bukti_pembayaran"
                            style={{ fontSize: '12px', color: '#333' }}
                            className='border border-gray-400 w-[210px]' />
                    </div>
                    <div className='pt-10 mb-5'>
                        <button
                            type='submit'
                            onClick={() => HandleSubmitPembayaran()}
                            className='bg-[#169859] text-sm text-[#f3faf6] p-1 w-full rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                            <span>Kirim</span>
                        </button>
                    </div>
                </form>
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