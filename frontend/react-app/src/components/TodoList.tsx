import React from "react"
import { TodoItem } from "./TodoItem"
import { Todo } from "../interfaces/index"
import { Flex } from "@chakra-ui/layout"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
} from "@chakra-ui/react"

interface TodoListProps {
  todos: Todo[]
  setTodos: Function
}

export const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <Flex
      variant="striped"
      colorScheme="gray"
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      mt="10"
    >
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>タイトル</Th>
            <Th>詳細</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            todos.map((todo: Todo, index: number) => {
              return (
                <TodoItem
                  key={index}
                  todo={todo}
                  setTodos={setTodos}
                />
              )
            })
            }
        </Tbody>
      </Table>
    </Flex>
  )
}
