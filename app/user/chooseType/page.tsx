"use client";

import {Button} from "antd";
import {useState} from "react";

export default function ChooseType(){

    const [currentType, setCurrentType] = useState(0);

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
                console.log("curType", curType.typeList);
                return ( // Add a return here to ensure the JSX is returned
                    (curType.typeList || []).map((lowestText) => {
                        console.log("lowestText", lowestText);
                        return (
                            <Button className={"w-full text-white mt-3"} style={{backgroundColor: "#00880C"}} onClick={() => setCurrentType(currentType + 1)}>
                                {lowestText}
                            </Button>
                        );
                    })
                );
            })}
        </div>
    </div>
}