'use client'
import {useEffect, useState} from "react";
import {FaArrowRight} from "react-icons/fa";
import {useRouter} from "next/navigation";

export default function OrderDonePage() {

    const [data, setData] = useState({});
    const router = useRouter();

    useEffect(() => {
        getListMission()
    }, []);

    const getListMission = async () => {
        const res = await fetch("https://48b4-36-66-71-34.ngrok-free.app/v1/testing/list/mission"); // Replace with your API URL
        const data = await res.json(); // Parse the JSON data

        setData(data.data[0])
    }

    return (
        <div className="relative flex flex-col justify-between h-screen max-w-md mx-auto bg-white border border-gray-300 rounded-lg overflow-hidden">
            {/* Header */}
            <header className="bg-white shadow p-4">
                <h1 className="text-lg font-bold text-black">Go Serve</h1>
            </header>

            {/* Content */}
            <main className="flex-grow p-4">
                <div className="bg-white rounded-lg shadow p-4">
                    {/* Title Section */}
                    <div className="flex items-center mb-4">
                        <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                        <h2 className="text-xl font-semibold text-black">{data?.user_name}</h2>
                    </div>

                    {/* Distance Badge */}
                    <div className="mb-4">
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-lg font-medium capitalize">
              {data?.type_mission}
            </span> <span className={'text-black opacity-65 text-lg '}>
                        - {data?.description}
                    </span>
                    </div>

                    {/* Address */}
                    <p className="text-sm text-gray-700 mb-2 capitalize mt-5">
                        {data?.location}
                    </p>
                    <p className="text-sm text-gray-500">{data?.id}</p>

                    {/* Tariff */}
                    <div className="my-8 border-t pt-4 flex items-center justify-between">
                        <h3 className="text-gray-700 font-semibold text-lg">Tarif</h3>
                        <p className="text-lg font-bold text-black">Rp {data?.price?.toLocaleString()}</p>
                    </div>

                    {/* Payment Method */}
                    <div className="mt-4 mb-4 flex flex-row justify-between items-center w-auto">
                        <h3 className="text-gray-700 font-semibold text-lg">Pembayaran</h3>
                        <div className="flex items-center">
                            <img src="/gopay-icon.png" alt="Gopay Logo" className="w-full h-6 ml-4" />
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Buttons */}
            <footer className="bg-white flex justify-between items-center">
                <button className="bg-[#367D37] text-white h-16 shadow flex items-center w-1/5 justify-center">
                    <span className="text-2xl font-bold">
                        <FaArrowRight />
                    </span>
                </button>
                <button className="bg-[#4CB050] text-white h-16 shadow flex justify-center w-4/5 items-center">
                    <span className="text-2xl font-bold" onClick={() => router.push('/agents/dashboard')}>SELESAI</span>
                </button>
            </footer>
        </div>
    );
}
