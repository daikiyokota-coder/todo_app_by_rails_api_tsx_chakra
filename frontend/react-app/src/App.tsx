import React, { useState, useEffect } from "react"
import { TodoList } from "./components/TodoList"
import { TodoForm } from "./components/organisms/TodoForm"

import { getTodos } from "./lib/api/todos"
import { Todo } from "./interfaces/index"
import { VFC } from "react"

//chakra全体用！！！
import { ChakraProvider } from "@chakra-ui/react"
import { Container, Heading, Flex } from "@chakra-ui/react"
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
      <Flex
        as="nav"
        bg="teal.400"
        color="gray.50"
        padding={{ base: 3, md: 4 }}
        mb="5"
      >
        <Heading
          as="h1"
          fontSize={{ base: "md", md: "lg" }}
          ml="5"
        >
          Todo App
        </Heading>
      </Flex>
      <Container maxW="container.md">
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </ChakraProvider>
  )
}

export default App
