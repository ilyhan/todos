import { TTab } from "@/common/interfaces/tab";
import { ITodo } from "@/common/interfaces/todos";

export function filterTodos(todos: ITodo[], query: TTab): ITodo[] {
    if(query == 'Active') {
        todos = todos.filter((todo: ITodo) => {
            if(!todo.isCompleted) return todo;
        });
    }else if (query == 'Completed') {
        todos = todos.filter((todo: ITodo) => {
            if(todo.isCompleted) return todo;
        });
    }
    return todos;
}