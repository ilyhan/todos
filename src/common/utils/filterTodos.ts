import { TTab } from "@/common/interfaces/tab";
import { ITodo } from "@/common/interfaces/todos";

export function filterTodos(todos: ITodo[], query: TTab): ITodo[] {
    return todos.filter((todo: ITodo) => {
        if (query === 'Active') {
            return !todo.isCompleted;
        } else if (query === 'Completed') {
            return todo.isCompleted;
        }
        return true; 
    });
}