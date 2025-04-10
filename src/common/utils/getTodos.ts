import { ITodo } from "@/common/interfaces/todos";
import { TTab } from "@/common/interfaces/tab";
import { filterTodos } from "./filterTodos";

export function getTodos(query: TTab): ITodo[] {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        let todos: ITodo[] = JSON.parse(storedTodos);
        return filterTodos(todos, query);
    }

    return [];
}