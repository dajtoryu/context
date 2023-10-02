import React from "react";

import { useState } from "react";
import { useTodoContext } from "../../../hooks/useTodoContext";
import {Button} from "@/shared/ui/Button/Button"
import {Input} from "@/shared/ui/Input/Input";

export const TodoTask = ({txt,index,id})=>{
     const {updateTodo, deleteTodo, completeTodo} = useTodoContext();
     const [disability,setDisability] = useState(true);
     const [inputValue,setInputValue] = useState(txt);
     
     //міняєм можливість редагування інпута, а також якщо вона включена поміняти тудушку
     const onChangeButtonClick= ()=>{
        setDisability(!disability)

        if(disability){
            updateTodo(id,inputValue);
        }

     }

     const onDeleteButtonClick = ()=>{
            deleteTodo(id);
     }
     const onChangeInput = (e)=>{
            setInputValue(e.target.value)
     }
     
     const onCompleteButtonClick = () =>{
           completeTodo(id);
     }


    return(
        <>
        
        <div>
        <Input disabled={disability} onChange={onChangeInput} value={inputValue} />
        <Button child="готово" onClick={onCompleteButtonClick}/>
        {disability ? (<Button onClick={onChangeButtonClick} child="змінити" />
                      ):

                      (<Button onClick={onChangeButtonClick} child="зберегти" />
                      )
        }
        <Button child="видалити" onClick={onDeleteButtonClick}/>

        </div>
        {/* {disability ? 
            (<div>
            <Input disabled={disability} onChange={onChangeInput} value={inputValue} />
            
            <Button child="готово" onClick={onCompleteButtonClick}/>

            <Button onClick={onChangeButtonClick} child="змінити" />
            <Button child="видалити" onClick={onDeleteButtonClick}/>


            </div>)
            : (<div>
                <Input disabled={disability} onChange={onChangeInput} value={inputValue} />
                <Button child="готово" onClick={onCompleteButtonClick}/>

                <Button onClick={onChangeButtonClick} child="зберегти" />
                <Button child="видалити" onClick={onDeleteButtonClick}/>

                </div>
            )
            
        } */}

        
        
        </>

    )


}