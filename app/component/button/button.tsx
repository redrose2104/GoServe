import {Button} from "antd";

export const PositiveButton = ({ text }) => {
    return <Button className={"w-100 text-white"} style={{ backgroundColor: "#00880C" }}>
        {text}
    </Button>
}