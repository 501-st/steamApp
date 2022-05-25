import React from 'react';
import Button from "../../../theme/button";
import Image from "../../../theme/image";
import Plus from "./images/plus.png";

let PlusButton = ({onClick}) => {
    return (
        <div style={{margin: "auto auto 30px"}}>
            <Button onClick={onClick} padding={"0 5px"} border={"black"} background={"rgba(50, 15, 15, 0.4)"}>
                <Image src={Plus}/>
            </Button>
        </div>
    )
}

export default PlusButton;