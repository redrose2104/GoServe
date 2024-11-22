'use client'
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {FaArrowRight, FaUser} from "react-icons/fa";
import {FaRegMessage} from "react-icons/fa6";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

// Fix for default Leaflet icons not appearing
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Data {
    user_name: string;
    type_mission: string;
    description: string;
    location: string;
    id: string;
}

export default function OrderPage() {

    const [data, setData] = useState<Data | null>(null);
    useEffect(() => {
        getListMission()
    }, []);

    const router = useRouter();

    const getListMission = async () => {
        const res = await fetch("https://48b4-36-66-71-34.ngrok-free.app/v1/testing/list/mission"); // Replace with your API URL
        const data = await res.json(); // Parse the JSON data

        setData(data.data[data?.data?.length - 1])
    }

    return (
        <div className="relative flex flex-col justify-between h-screen max-w-md bg-white border border-gray-300 rounded-lg overflow-hidden">
            <div className="flex-grow">
                <MapContainer
                    center={[-6.2675, 106.8076]}
                    zoom={18}
                    className="w-full h-full"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* Markers */}
                    <Marker position={[-6.2675, 106.8076]} />
                    <Marker position={[-6.2685, 106.812]} />
                    {/* Polyline for route */}
                    <Polyline
                        positions={[
                            [-6.2675, 106.8076],
                            [-6.2685, 106.812],
                        ]}
                        color="blue"
                    />
                </MapContainer>
            </div>

            {/* Info Section */}
            <div className="bg-white p-4 border-t shadow-md text-black">
                <div className={'flex flex-items items-center justify-between'}>
                    <div className={'bg-green-400 rounded-full w-10 h-10 text-lg text-white flex items-center justify-center'}>
                        <FaUser />
                    </div>
                    <div className={'w-3/4'}>
                        <h2 className="text-lg font-bold">Dipesan oleh</h2>
                        <p className="text-gray-800 text-xl">{data?.user_name}</p>
                        <p className="text-gray-500 text-sm">4.5 ★ (498)</p>
                    </div>
                    <FaRegMessage className={'text-3xl w-10'} />
                </div>


                <div className="mt-4 p-4">
                    <h3 className="font-semibold text-lg mb-5">
                        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-lg font-medium capitalize">
                      {data?.type_mission}
                    </span> <span className={'text-black opacity-65 text-lg '}>
                        - {data?.description} </span>
                    </h3>
                    <p className="text-gray-600 text-sm">
                        {data?.location}
                    </p>
                </div>
            </div>

            {/* Button */}
            <div >
                <button className="h-20 text-2xl bg-[#1F87E6] text-white w-full font-semibold shadow-md flex items-center justify-between">
                    <div className={'w-20 flex items-center justify-center bg-[#1665C1] h-full '}>< FaArrowRight className={'w-6'} /></div>
                    <div className={'w-full flex items-center ml-4 text-left h-full'} onClick={() => router.push('/agents/order-done')}>Udah sama customer</div>
                </button>
            </div>
        </div>
    );
}
