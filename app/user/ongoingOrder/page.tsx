'use client'
import {Button, Input} from "antd";
import {ArrowLeftOutlined, ArrowRightOutlined, StarOutlined } from "@ant-design/icons";
import {useEffect, useState} from "react";
import {MapContainer, Marker, Polyline, TileLayer} from "react-leaflet";
import {useRouter} from "next/navigation";
import L from "leaflet";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});
interface Data {
    user_name: string;
    description: string;
    location: string;
    rating: string;
}

export default function OngoingOrder() {
    const router = useRouter();
    const [data, setData] = useState<Data | null>(null);

    // Fetch ongoing mission
    const getOngoingMission = async () => {
        try {
            const res = await fetch("https://48b4-36-66-71-34.ngrok-free.app/v1/testing/list/mission");
            if (!res.ok) throw new Error("Failed to fetch mission");
            const data = await res.json();
            setData(data.data[0]);
        } catch (error) {
            console.error("Error fetching mission:", error);
        }
    };

    useEffect(() => {
        getOngoingMission();
    }, []);


    return (
        <div className="relative flex flex-col justify-between h-screen">
            <div className="absolute flex flex-col p-10 w-full" style={{ zIndex: 1000 }}>
                <Input value={data?.location} className="mt-4 w-full" disabled={true} style={{ backgroundColor: "white" }} />
                <Input value={data?.description} className="mt-4" disabled={true} style={{ backgroundColor: "white" }} />
            </div>

            {/* Map renders only on client side */}
            <MapContainer
                center={[-6.2675, 106.8076]}
                zoom={18}
                className="w-full h-full"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[-6.2675, 106.8076]} />
                <Marker position={[-6.2685, 106.812]} />
                <Polyline
                    positions={[
                        [-6.2675, 106.8076],
                        [-6.2685, 106.812],
                    ]}
                    color="blue"
                />
            </MapContainer>

            <div className="flex flex-col">
                <Button
                    type="primary"
                    icon={<ArrowLeftOutlined style={{ color: "black" }} />}
                    className="bg-white"
                    style={{ borderRadius: 20 }}
                    onClick={() => router.push("requestMission")}
                />
                <div className="text-white pl-4" style={{ backgroundColor: "#00880C" }}>
                    Agent akan datang dalam 1 menit
                </div>
                <div className="flex flex-col justify-between bg-white p-10">
                    <div className="flex flex-row justify-between">
                        <div>
                            <p>{data?.user_name}</p>
                            <div className="flex flex-row">
                                <StarOutlined />
                                <p>{data?.rating}</p>
                            </div>
                        </div>
                        <div style={{ width: 80, height: 80 }}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Button className="w-full text-white mt-3" style={{ backgroundColor: "#00880C" }}>
                            Completed
                        </Button>
                        <Button className="w-full text-white mt-3" style={{ backgroundColor: "#FF0202" }}>
                            Not Complete
                        </Button>
                    </div>
                </div>
                <Button
                    icon={<ArrowRightOutlined />}
                    onClick={() => router.push("chat")}
                >
                    Hubungi Agent
                </Button>
            </div>
        </div>
    );
}
