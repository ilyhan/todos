import { ITodo } from "@/common/interfaces/todos";

export function setTodos(todos: ITodo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
}