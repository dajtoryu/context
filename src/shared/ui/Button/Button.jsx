import React from "react";

export const Button =({child, onClick})=>{


    return(
        <button onClick={onClick}>{child}</button>
    )
}