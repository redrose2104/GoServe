import {Button} from "antd";

export const PositiveButton = ({ text }) => {
    return <Button className={"w-full text-white"} style={{ backgroundColor: "#00880C" }}>
        {text}
    </Button>
}