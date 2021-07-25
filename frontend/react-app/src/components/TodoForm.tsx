import React, { useState } from "react"
import { createTodo } from "../lib/api/todos"
import { Todo } from "../interfaces/index"
import { PrimaryButton } from "./atoms/PrimaryButton"


// button用！！！
import { Flex, Stack, HStack, VStack } from "@chakra-ui/react"
// button用！！！

// input用！！！
import { Input } from "@chakra-ui/react"
// input用！！！

//textarea用！！！
import { Textarea } from "@chakra-ui/react"
//textarea用！！！


type TodoFormProps = {
  todos: Todo[]
  setTodos: Function
}

export const TodoForm: React.FC<TodoFormProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")

  const handleCreateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data: Todo = {
      title: title,
      content: content
    }

    try {
      const res = await createTodo(data)
      console.log(res)
      if (res.status == 200) {
        setTodos([...todos, res.data.todo])
      } else {
        console.log(res.data.message)
      }
    } catch (err) {
      console.log(err)
    }

    setTitle("")
    setContent("")
  }

  return (
    <form onSubmit={handleCreateTodo}>
      <ul>
        <li>
          <Input
            type="text"
            mt={[2]}
            placeholder="タイトルを入力"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value)
            }}
          />
        </li>
        <li>
          <Textarea
            placeholder="詳細のテキストが入る"
            mt={[2]}
            mb={['2']}
            value={content}
            onChange= {(e: React.ChangeEvent<HTMLTextAreaElement>) =>{
              setContent(e.target.value)
            }}
          >
          </Textarea>
        </li>
        <li>
          <Stack>
            <PrimaryButton disabled={!title}>送信</PrimaryButton>
          </Stack>
        </li>
      </ul>
    </form>
  )
}
