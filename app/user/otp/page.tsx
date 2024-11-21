import {Input} from "antd";
import Link from "next/link";
import {PositiveButton} from "@/app/component/button/button";

export default function OtpPage(){
    return (
        <div className={"p-10"}>
            <div className={"flex flex-col"}>
                <p className={"font-bold title-text"}>GoPay PIN kamu jadi GoTo PIN</p>
                <p>Kamu perlu mengetik GoTo PIN untuk masuk</p>
                <Input placeholder="OTP" style={{ marginTop: 20, height: 50 }}/>
                <div className={"mt-5 w-full"}>
                    <Link href={"chooseType"}>
                        <PositiveButton text={"Lanjut"} />
                    </Link>
                </div>
            </div>
        </div>
    )
}