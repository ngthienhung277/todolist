import React from 'react'
import Button from '@atlaskit/button'
import Todo from './Todo'
export default function TodoList({ todoList, onCheckBtnClick }) {
  return (
    <>
    {
      todoList.map((todo) => {
        return <Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick} />
      })
    }
    </>
  )
}
