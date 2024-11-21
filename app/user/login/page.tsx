import { Input } from "antd";
import {PositiveButton} from "@/app/component/button/button";

export default function loginPage(){
    return (
        <div className={"p-10"}>
            <div className={"flex flex-col"}>
                <p className={"font-bold text-2xl"}>Selamat Datang di Gojek!</p>
                <p>Masuk atau daftar hanya dalam beberapa langkah mudah</p>
                <div className={"flex flex-row"}>
                    <p>Nomor HP</p>
                    <p className={"color-red"}>*</p>
                </div>
                <div className={"flex flex-row"}>
                    <div className={"bg-slate-200 self-center"} style={{ borderRadius: 10, padding: 3 }}>+62</div>
                    <Input placeholder="Nomor HP" style={{ marginLeft: 10 }}/>
                </div>
                <PositiveButton text={"Lanjut"} />
                <p>Saya menyetujui Ketentuan Layanan & Kebijakan Privasi Gojek</p>
            </div>
        </div>
    )
}