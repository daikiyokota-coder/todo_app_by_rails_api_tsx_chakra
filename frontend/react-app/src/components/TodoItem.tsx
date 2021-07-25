import React from "react"
import { deleteTodo } from "../lib/api/todos"
import { Todo } from "../interfaces/index"
import {Tr, Td} from "@chakra-ui/react"


import { Button } from "@chakra-ui/react";
import {DeleteButton} from "./atoms/DeleteButton";

interface TodoItemProps {
  todo: Todo
  setTodos: Function
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, setTodos }) => {
  const handleDeleteTodo = async (id: number) => {
    try {
      const res = await deleteTodo(id)
      console.log(res)

      if (res?.status === 200) {
        setTodos((prev: Todo[]) => prev.filter((todo: Todo) => todo.id !== id))
      } else {
        console.log(res.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Tr>
      <Td >{todo.title}</Td>
      <Td>{todo.content}</Td>
      <Td>
        <DeleteButton onClick={() => handleDeleteTodo(todo.id || 0)}>
          削除
        </DeleteButton>
      </Td>
    </Tr>
  )
}
