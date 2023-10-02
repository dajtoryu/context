import { useContext } from "react";
import { TodoContext } from "../context/Todo/TodoContex";

export const useTodoContext =  ()=>{
        return useContext(TodoContext);

}