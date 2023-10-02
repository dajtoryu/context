import React from "react";
import { BrowserRouter, Routes, Route, Link,NavLink} from "react-router-dom";
import { TodoContextProvider } from "@/shared/context/Todo/TodoContextProvider";
import { TodoList } from "./TodoList/TodoList";
import { TodoInput } from "./TodoInput/TodoInput";
export const Todo =()=>{

    return(
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/todos">Todos</NavLink>
                    
                    </li>
                    <li>
                        <NavLink to="/todoscompleted">CompletedTodos</NavLink>
                    </li>
                </ul>
            </nav>
            
            <Routes>
                <Route path="/" index element={
                  <TodoContextProvider>

                  <TodoInput />
                  </TodoContextProvider>
               
                
                } />
                <Route path="todos" element={
                    <TodoContextProvider>

                     <TodoList completed={false}/>
                    </TodoContextProvider>

                } />
                <Route path="todoscompleted"
                  element={
                    <TodoContextProvider>

                     <TodoList completed={true}/>
                    </TodoContextProvider>
                  } />
            </Routes>
        </BrowserRouter>
        
        
    )

}