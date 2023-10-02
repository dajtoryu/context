import React from "react";
import { useState } from "react";
import {TodoContext} from "./TodoContex";
import { v4 as uuidv4 } from 'uuid';

export const TodoContextProvider = ({children})=>{

    const [todos,setTodos] = useState([]);

    const createTodo = (msg) =>{
        
         
        setTodos((prv)=>{
            return [...prv,msg];
        })

    }

    const deleteTodo = (id)=>{
        const newTodos = todos.filter((todo)=>{
            return todo.id !==id;
        })

        setTodos(newTodos);
    }


    const updateTodo=(id,value)=>{
            const updatedTodo = todos.map((todo)=>{
                if(todo.id === id) {
                    todo.txt=value;
                }

                return todo;
                
                
            })
            setTodos(updatedTodo);
    }

    const completeTodo = (id)=>{
        const completedTodo = todos.map((todo)=>{
            if(todo.id === id){
                todo.complete=true
            }
            return todo;
        })

        setTodos(completedTodo);
    }

    

    return(
        <TodoContext.Provider value={{todos, createTodo, deleteTodo,updateTodo,completeTodo}}>
            {children}
        </TodoContext.Provider>
    )
}