import React from 'react';
import Button from "../../../theme/button";
import Image from "../../../theme/image";
import Plus from "./images/plus.png";

let PlusButton = ({onClick}) => {
    return (
        <div style={{textAlign: "center", marginBottom: "30px"}}>
            <Button onClick={onClick} padding={"0 5px"} border={"black"} background={"#DDDDDD"}>
                <Image src={Plus}/>
            </Button>
        </div>
    )
}

export default PlusButton;