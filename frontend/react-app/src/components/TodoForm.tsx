import React, { useState } from "react"
import { createTodo } from "../lib/api/todos"
import { Todo } from "../interfaces/index"

type TodoFormProps = {
  todos: Todo[]
  setTodos: Function
}

export const TodoForm: React.FC<TodoFormProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>("")

  const handleCreateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data: Todo = {
      title: title
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
  }

  return (
    <form onSubmit={handleCreateTodo}>
      <ul>
        <li>
          <input
            type="text"
            placeholder="タイトルを入力"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value)
            }}
          />
        </li>
        <li>
          <textarea placeholder="詳細のテキストが入る"></textarea>
        </li>
        <li>
          <input type="submit" value="送信" disabled={!title} />
        </li>
      </ul>
    </form>
  )
}
