import React from "react";

import { useTodoContext } from "../../../hooks/useTodoContext";
import {Button} from "@/shared/ui/Button/Button"
import {Input} from "@/shared/ui/Input/Input";

export const CompleteTodoTask = ({txt,id})=>{
     const {deleteTodo} = useTodoContext();
     
     

     const onDeleteButtonClick = ()=>{
            deleteTodo(id);
     }
     

    return(
        <div>

            <Input disabled={true} value={txt} />
            <Button child="видалити" onClick={onDeleteButtonClick}/>
        
       
        </div>

    )


}