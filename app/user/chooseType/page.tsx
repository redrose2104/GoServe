"use client";

import {Button} from "antd";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function ChooseType(){

    const [currentType, setCurrentType] = useState(0);
    const router = useRouter();

    const typeOrder = [
        {
            name: 0,
            typeList: [ "Kategori Pilihan", "Lainnya" ]
        },
        {
            name: 1,
            typeList: [ "Daily", "Shop and Delivery", "Entertainment and Creativity" ]
        },
        {
            name: 2,
            typeList: [ "Tugas Rumah", "Layanan Kecil", "Kebutuhan Darurat" ]
        }
    ]

    return <div className={"p-10 h-screen content-center"}>
        <div className={"flex flex-col justify-center"}>
            {typeOrder.filter((type) => type.name === currentType).map((curType) => {
                return (
                    (curType.typeList || []).map((lowestText, index) => {
                        return (
                            <Button key={`button-${index}`}  className={"w-full text-white mt-3"} style={{backgroundColor: "#00880C"}} onClick={() => (currentType === 2 || lowestText == "Lainnya") ? router.push("requestMission") : setCurrentType(currentType + 1)}>
                                {lowestText}
                            </Button>
                        );
                    })
                );
            })}
        </div>
    </div>
}