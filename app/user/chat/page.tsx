'use client'
import React from 'react';
import {ArrowLeftOutlined, ArrowRightOutlined, CameraOutlined, PlusOutlined} from "@ant-design/icons";
import {Button, Input} from "antd";
import {useRouter} from "next/navigation";

export default function Chat() {
    const router = useRouter();
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-gray-200 p-4 flex items-center">
                <Button type="primary" icon={<ArrowLeftOutlined style={{ color: "black" }} />} iconPosition={"start"} className={"bg-white"} style={{ borderRadius: 20 }} onClick={() => {router.push("ongoingOrder")}}/>
                <div className="flex-grow text-center text-gray-700 font-medium">John Doe</div>
            </div>

            {/* Chat Messages */}
            <div className="flex-grow overflow-y-auto p-4">
                <div className="flex mb-2">
                    <div className="bg-gray-200 text-gray-900 p-3 rounded-lg max-w-xs">
                        Lokasi sesuai titik ya
                    </div>
                    <span className="text-gray-500 text-sm self-end ml-2">19:22</span>
                </div>

                <div className="flex justify-end mb-2">
                    <div className="bg-green-500 text-white p-3 rounded-lg max-w-xs">
                        Iya betul
                    </div>
                    <span className="text-gray-500 text-sm self-end ml-2">19:22</span>
                </div>
            </div>

            {/* Input Field */}
            <div className="p-4 bg-gray-200 flex items-center">
                <Button icon={<PlusOutlined />} iconPosition={"end"} className={"bg-transparent"}/>
                <Input placeholder="Ketik pesan..." className={"p-2 border rounded-lg"}/>
                <Button icon={<CameraOutlined />} iconPosition={"end"} className={"bg-transparent"}/>
                <Button icon={<ArrowRightOutlined />} iconPosition={"end"} className={"bg-transparent"}/>
            </div>
        </div>
    );
}
