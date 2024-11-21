import { Input } from "antd";
import {PositiveButton} from "@/app/component/button/button";
import Link from "next/link";

export default function LoginPage(){
    return (
        <div className={"p-5 mt-20 mx-2 bg-white"}>
            <div className={"flex flex-col"}>
                <p className={"font-bold text-2xl"}>Selamat Datang di Gojek!</p>
                <p>Masuk atau daftar hanya dalam beberapa langkah mudah</p>
                <div className={"flex flex-row mt-10"}>
                    <p>Nomor HP</p>
                    <p className={"color-red"}>*</p>
                </div>
                <div className={"flex flex-row"}>
                    <div className={"bg-slate-200 self-center"} style={{ borderRadius: 10, padding: 3 }}>+62</div>
                    <Input placeholder="Nomor HP" style={{ marginLeft: 10 }}/>
                </div>
                <div className={"mt-5 w-full"}>
                    <Link href={"otp"}>
                        <PositiveButton text={"Lanjut"} />
                    </Link>
                </div>
                <p className={"mt-5"}>Saya menyetujui Ketentuan Layanan & Kebijakan Privasi Gojek</p>
            </div>
        </div>
    )
}