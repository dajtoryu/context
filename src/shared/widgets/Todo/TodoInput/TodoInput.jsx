import React from "react";
import { useState } from "react";
import {useTodoContext} from "@/shared/hooks/useTodoContext";
import {Input} from "@/shared/ui/Input/Input";
import {Button}  from "@/shared/ui/Button/Button";
import { v4 as uuidv4 } from 'uuid';


export const TodoInput =()=>{


    const [inputValue, setInputValue]=useState('');
    const {createTodo,todos} = useTodoContext();

    const onClickButton = ()=>{
        const input = inputValue.trim();
        if (input.length <=0) return 
       const todo = {
           id:uuidv4(),
           txt:inputValue,
           complete:false
       }

       createTodo(todo);
       setInputValue('');
       

    }


    const onChangeInput =(e)=>{
        setInputValue(e.target.value);
    }

    return(
        <>
         <Input onChange={onChangeInput} value={inputValue}/ >
        <Button onClick={onClickButton} child="create" />
        </>
        
        
    )
}
