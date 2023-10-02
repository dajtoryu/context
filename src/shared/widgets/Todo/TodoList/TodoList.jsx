import React from "react";
import { TodoTask } from "../TodoTask/TodoTask";
import {CompleteTodoTask} from "../CompleteTodoTask/CompleteTodoTask";
import {useTodoContext} from "../../../hooks/useTodoContext";
export const TodoList = ({completed})=>{

   const {todos} = useTodoContext();

   const actualTodos=todos.filter((todo)=>{
       return todo.complete==completed;
   })
   
   if(actualTodos.length ==0 ) {return <p>Список пустий</p>}


   if(!completed){
  
    return(
      actualTodos.map((todo,index)=>{
           return <TodoTask txt={todo.txt} key={todo.id}  id={todo.id} index={index}/>
         
      })
       
    )

   }

   if(completed){
    return(
      actualTodos.map((todo,index)=>{
           return <CompleteTodoTask txt={todo.txt} key={todo.id} id={todo.id} index={index}/>
         
      })
       
    )
   }

 

}