import {Button} from "antd";

interface PositiveButtonProps {
    text: string;
}
export const PositiveButton = ({ text }: PositiveButtonProps) => {
    return <Button className={"w-full text-white"} style={{ backgroundColor: "#00880C" }}>
        {text}
    </Button>
}