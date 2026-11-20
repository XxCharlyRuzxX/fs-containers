
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Todo from './Todo'

describe('Todo component', () => {
  it('renders the todo text', () => {
    const todo = {
      text: 'Learn Docker',
      done: false,
    }

    render(
      <Todo
        todo={todo}
        deleteTodo={vi.fn()}
        completeTodo={vi.fn()}
      />
    )

    expect(screen.getByText('Learn Docker')).toBeTruthy()
  })

  it('calls completeTodo when Set as done is clicked', () => {
    const todo = {
      text: 'Learn Docker',
      done: false,
    }

    const completeTodo = vi.fn()

    render(
      <Todo
        todo={todo}
        deleteTodo={vi.fn()}
        completeTodo={completeTodo}
      />
    )

    fireEvent.click(screen.getByText('Set as done'))

    expect(completeTodo).toHaveBeenCalledWith(todo)
  })

  it('calls deleteTodo when Delete is clicked', () => {
    const todo = {
      text: 'Learn Docker',
      done: false,
    }

    const deleteTodo = vi.fn()

    render(
      <Todo
        todo={todo}
        deleteTodo={deleteTodo}
        completeTodo={vi.fn()}
      />
    )

    fireEvent.click(screen.getByText('Delete'))

    expect(deleteTodo).toHaveBeenCalledWith(todo)
  })
})
