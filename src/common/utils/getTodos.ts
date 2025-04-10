import { ITodo } from "@/common/interfaces/todos";

export function getTodos(): ITodo[] {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        return JSON.parse(storedTodos) as ITodo[];
    }

    return [];
}