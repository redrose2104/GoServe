'use client'
import {useRouter} from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form"
import moment from "moment";

type IFormInput = {
    location: string
    description: string
    price: number
}

export default function RequestMission(){

    const router = useRouter();
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const body = {
            "type_mission": "daily",
            "description": data.description,
            "price": data.price,
            "gender": "Laki",
            "user_name": "Adam Smasher",
            "created_date": moment().format('YYYY-MM-DD hh:mm:ss'),
            "start_date": moment().format('YYYY-MM-DD hh:mm:ss'),
            "location": data.location
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };
        fetch('https://48b4-36-66-71-34.ngrok-free.app/v1/testing/create/mission', requestOptions)
            .then(response => response.json())
            .then(() => {
                router.push("ongoingOrder")
            });
    }

    return <div className={"p-5 h-screen content-center"}>
        <div className={"flex flex-col justify-center"}>
            <div className={"flex flex-col text-white items-center p-2"} style={{ backgroundColor: "#00880C", height: 120 }}>
                <p className={"font-semibold"}>Butuh bantuan apa, Fulan?</p>
                <p>Mulai dari bersihin kamar mandi, beli gas, galon, cuci pakaian, dan lain-lain.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col p-5 bg-white"}>
                <input {...register("location", { required: true })} placeholder={"Di mana?"} className={"mt-4 border-2 rounded-md h-10"}/>
                <input {...register("description", { required: true })} placeholder={"Butuh bantuan apa?"} className={"mt-4 border-2 rounded-md h-10"}/>
                <input type={"number"} {...register("price", { required: true })} placeholder={"Tentukan harga (Rp)"} className={"mt-4 border-2 rounded-md h-10"}/>
                <input type="submit" className={"w-full text-white mt-3 cursor-pointer h-10 rounded-md"} style={{backgroundColor: "#00880C"}} />
            </form>
        </div>
    </div>
}