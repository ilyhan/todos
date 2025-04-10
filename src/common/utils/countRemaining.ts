import { ITodo } from "@/common/interfaces/todos";

export function countRemaining(todos: ITodo[]): number {
    return todos.reduce((acc, todo) => {
        if (!todo.isCompleted) {
            return acc + 1; 
        }
        return acc; 
    }, 0);
}
