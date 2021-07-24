import React, { useState, useEffect } from "react"
import { TodoList } from "./components/TodoList"
import { TodoForm } from "./components/TodoForm"

import { getTodos } from "./lib/api/todos"
import { Todo } from "./interfaces/index"
import { VFC } from "react"

//chakra全体用！！！
import { ChakraProvider } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
//chakra全体用！！！


const App: VFC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleGetTodos = async () => {
    try {
      const res = await getTodos()
      if (res?.status === 200) {
        setTodos(res.data.todos)
      } else {
        console.log(res.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetTodos()
  }, [])

  return (
    <ChakraProvider>
      <Container maxW="container.md">
        <h1>Todo App</h1>
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </ChakraProvider>
  )
}

export default App
