/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { TodoForm } from './TodoForm';

export type UnsavedTodo = {
  task: string;
  isCompleted: boolean;
};
export type Todo = UnsavedTodo & {
  todoId: number;
};

export type UseTodosValues = {
  isLoading: boolean;
  error?: unknown;
  todos?: Todo[];
  addTodo: (todo: UnsavedTodo) => Promise<void>;
  toggleCompleted: (todoId: number) => Promise<void>;
};
/**
 * Manages the Todos by reading from and writing to the backend API,
 * using the API functions below.
 */
export function useTodos(): UseTodosValues {
  const [todos, setTodos] = useState<Todo[]>();
  const [error, setError] = useState<unknown>();
  useEffect(() => {
    /* TODO: If `todos` hasn't been defined yet, read the items from the API
     * and set them into the `todos` state.
     */
    if (todos === undefined) {
      readTodos();
      setTodos(todos);
/*{    fetch('/api/todos', {method: 'GET'})
    .then((res) => { return res.json()})
    .then((data) => {
      setTodos([...data])
    })
    .catch((err) => {
      setError(err)
    })}*/
    } else {
      setError(new Error('Error'))
    }
  }, [todos]);

  async function addTodo(newTodo: UnsavedTodo): Promise<void> {
    /* TODO: Call the API function that creates a Todo item.
     * When the promise returned by that function resolves, update the `todos` state.
     * Note that it is critical that you pass a _new_ array. Do not modify the `todos` array.
     */
      const create = await createTodo(newTodo);
      const todo = create[0];
      setTodos([...todo]);
  }

  async function toggleCompleted(todoId: number): Promise<void> {
    /* TODO: Find the Todo item being updated, toggle its completed prop, and call
     * the API function that updates a Todo item.
     * When the promise returned by that function resolves, update the `todos` state.
     * When updating this state, use the updated `todo` returned from the API.
     * Note that it is critical that you pass a _new_ array. Do not modify the `todos` array.
     */
     try {
      if (!todos) {
        throw new Error('no todos');
      }
    const found = todos.find((todo) => todo.todoId === todoId);
    if (found === undefined) {
      throw new Error('Todos undefined');
    }
    found.isCompleted = !found.isCompleted;
    const update = await updateTodo(found);
    setTodos([...update[0]]);
  } catch (err) {
    console.log();
  }
  }

  return {
    isLoading: todos === undefined && error === undefined,
    error,
    todos,
    addTodo,
    toggleCompleted,
  };
}

/**
 * Reads all To Do items from the API.
 * @returns Promise that resolves with the read items.
 */
async function readTodos(): Promise<Todo[]> {
  const res = await fetch('/api/todos');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Creates a new To Do item using the API.
 * @param todo The To Do to create.
 * @returns Promise that resolves with the new item returned from the API.
 */
async function createTodo(todo: UnsavedTodo): Promise<Todo> {
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  };
  const res = await fetch('/api/todos', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Updates a To Do item using the API by setting its `isCompleted` state.
 * @param todo The To Do to update.
 * @returns Promise that resolves with the updated To Do item.
 */
async function updateTodo(todo: Todo): Promise<Todo> {
  const req = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isCompleted: todo.isCompleted }),
  };
  const res = await fetch(`/api/todos/${todo.todoId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
