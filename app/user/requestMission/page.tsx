'use client'
import {Button, Input} from "antd";
import {useRouter} from "next/navigation";

export default function requestMission(){

    const router = useRouter();

    return <div className={"p-5 h-screen content-center"}>
        <div className={"flex flex-col justify-center"}>
            <div className={"flex flex-col text-white items-center p-2"} style={{ backgroundColor: "#00880C", height: 120 }}>
                <p className={"font-semibold"}>Butuh bantuan apa, Fulan?</p>
                <p>Mulai dari bersihin kamar mandi, beli gas, galon, cuci pakaian, dan lain-lain.</p>
            </div>
            <div className={"flex flex-col p-5 bg-white"}>
                <Input placeholder="Di mana?" className={"mt-4"}/>
                <Input placeholder="Butuh bantuan apa?" className={"mt-4"}/>
                <Input placeholder="Tentukan harga" className={"mt-4"}/>
                <Button className={"w-full text-white mt-3"} style={{backgroundColor: "#00880C"}} onClick={() => {router.push("ongoingOrder")}}>Confirm</Button>
            </div>
        </div>
    </div>
}