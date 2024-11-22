'use client'
import React, {useState} from 'react';
import {ArrowLeftOutlined, ArrowRightOutlined, CameraOutlined, PlusOutlined} from "@ant-design/icons";
import {Button, Input} from "antd";
import {useRouter} from "next/navigation";
import moment from "moment";

export default function Chat() {
    const router = useRouter();
    const [messageVal, setMessageVal] = useState("");
    const [arrayChat, setArrayChat] = useState([
        {
            isSender: false,
            content: "Lokasi sesuai titik ya",
            time: "08:20"
        },
        {
            isSender: true,
            content: "Iya",
            time: "08:30"
        }
    ]);

    const handleSubmit = () => {
        setArrayChat([
            ...arrayChat,
            {
                isSender: true,
                content: messageVal,
                time: moment().format("HH:mm")
            }
        ]);
    }

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-gray-200 p-4 flex items-center">
                <Button type="primary" icon={<ArrowLeftOutlined style={{ color: "black" }} />} iconPosition={"start"} className={"bg-white"} style={{ borderRadius: 20 }} onClick={() => {router.push("ongoingOrder")}}/>
                <div className="flex-grow text-center text-gray-700 font-medium">John Doe</div>
            </div>

            {/* Chat Messages */}
            <div className="flex-grow overflow-y-auto p-4">
                {arrayChat.map((chat) => (
                    chat.isSender ? (
                        <div className="flex justify-end mb-2">
                            <div className="bg-green-500 text-white p-3 rounded-lg max-w-xs">
                                {chat.content}
                            </div>
                            <span className="text-gray-500 text-sm self-end ml-2">{chat.time}</span>
                        </div>
                        ) : (
                        <div className="flex mb-2">
                            <div className="bg-gray-200 text-gray-900 p-3 rounded-lg max-w-xs">
                                {chat.content}
                            </div>
                            <span className="text-gray-500 text-sm self-end ml-2">{chat.time}</span>
                        </div>
                    )
                ))}
            </div>

            {/* Input Field */}
            <div className="p-4 bg-gray-200 flex items-center">
                <Button icon={<PlusOutlined />} iconPosition={"end"} className={"bg-transparent"}/>
                <Input placeholder="Ketik pesan..." className={"p-2 border rounded-lg"} onChange={(e) => setMessageVal(e.target.value)}/>
                <Button icon={<CameraOutlined />} iconPosition={"end"} className={"bg-transparent"}/>
                <Button icon={<ArrowRightOutlined />} iconPosition={"end"} className={"bg-transparent"} onClick={() => handleSubmit()}/>
                {/*<Button icon={<ArrowRightOutlined />} iconPosition={"end"} className={"bg-transparent"} onClick={() => console.log("clicked") }/>*/}
            </div>
        </div>
    );
}
