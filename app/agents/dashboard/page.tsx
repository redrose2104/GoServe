'use client'
import {FaHome, FaPowerOff, FaStore, FaUser, FaWallet} from "react-icons/fa";
import {FaMessage} from "react-icons/fa6";
import {IoMapSharp} from "react-icons/io5";
import {SiGooglemaps} from "react-icons/si";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
export default function Dashboard() {

    const [data, setData] = useState(0);
    const [color, setColor] = useState('bg-black');
    const router = useRouter()

    useEffect(() => {
        getListMission();

        const interval = setInterval(() => {
            if (data === 0) {
                getListMission();
            } else {
                router.push("/agents/get-order")
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [data]);

    const getListMission = async () => {
        const res = await fetch("https://48b4-36-66-71-34.ngrok-free.app/v1/testing/list/mission"); // Replace with your API URL
        const data = await res.json(); // Parse the JSON data

        setData(data?.data?.length)
    }

    const onClickPower = () => {
        if (color == 'bg-black'){
            setColor('bg-green-400')
        } else{
            setColor('bg-black')
        }
        console.log('coolr', color)
    }

    return (
        <div className="relative flex flex-col justify-between h-screen max-w-md mx-auto bg-white border border-gray-300 rounded-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 shadow-md relative">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-black rounded-full flex justify-center items-center">
                        <FaUser className="text-xs w-6 h-6"/>
                    </div>
                </div>
                {color == "bg-black" &&
                <div className="px-4 py-1 text-lg text-bold font-medium bg-white rounded-full text-black shadow-md">
                    Offline &gt;
                </div>
                }
                <div className={`w-10 h-10 ${color} rounded-full flex justify-center items-center`} onClick={() => onClickPower()}>
                    <FaPowerOff className="text-xs text-white w-6 h-6"/>
                </div>
            </div>

            {/* Map Section */}
            <div className="flex-grow relative">
                {/* Simulasi Map */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.995516637477!2d107.61912261477314!3d-6.90344409501153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64ec6894bb1%3A0xe839b634b21715d2!2sBandung!5e0!3m2!1sen!2sid!4v1637143874245!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    loading="lazy"
                    title="Map"
                ></iframe>

                {/* Action Buttons */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                    <button className="p-3 bg-white rounded-full shadow-md">
                        <IoMapSharp className="text-xs text-green-500 w-6 h-6"/>
                    </button>
                    <button className="p-3 text-gray-400 bg-white rounded-full shadow-md flex justify-center items-center">
                        <SiGooglemaps />
                    </button>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="flex items-center justify-around bg-white border-t border-gray-300 p-2">
                <div className="flex flex-col items-center">
                    <FaHome className="text-xs text-green-500 w-6 h-6"/>
                    <span className="text-xs text-green-500">Beranda</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaWallet className="w-6 h-6"/>
                    <span className="text-xs">Pendapatan</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaStore className="w-6 h-6"/>
                    <span className="text-xs">Swadaya</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaMessage className="w-6 h-6"/>
                    <span className="text-xs">Pesan</span>
                </div>
            </div>
        </div>
    );
}
