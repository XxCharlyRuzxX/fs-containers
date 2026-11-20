
import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  if (!Array.isArray(todos)) {
    return null
  }

  return (
    <>
      {todos.map((todo, index) => (
        <React.Fragment key={todo._id || index}>
          {index > 0 && <hr />}
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        </React.Fragment>
      ))}
    </>
  )
}

export default TodoList
