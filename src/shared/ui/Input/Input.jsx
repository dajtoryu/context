import React from "react";

export const Input =({onChange, disabled,type, value})=>{


    return(<input onChange={onChange} disabled={disabled} value={value}></input>)
}