import React, { useState } from "react"
import { createTodo } from "../../lib/api/todos"
import { Todo } from "../../interfaces/index"
import { PrimaryButton } from "../atoms/PrimaryButton"
import { BaseTextarea } from "../atoms/BaseTextarea"
import { BaseInput } from "../atoms/BaseInput"

// button用！！！
import { Flex, Stack, HStack, VStack } from "@chakra-ui/react"
// button用！！！

type TodoFormProps = {
  todos: Todo[]
  setTodos: Function
}

export const TodoForm: React.FC<TodoFormProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>): void =>{
    setContent(e.target.value)
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

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
          <BaseInput
            placeholder="タイトルを入力"
            value={title}
            onChange={onChangeInput}
          />
        </li>
        <li>
          <BaseTextarea
            placeholder="詳細を入力"
            value={content}
            onChangeTextarea={onChangeTextarea}
          />
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
