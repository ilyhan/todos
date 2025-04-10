import { ITodo } from "@/common/interfaces/todos";
import Checkbox from "@/common/ui/checkbox/Checkbox";
import "@/common/components/todosList/style.scss";

interface ITabsProps {
    todos: ITodo[];
    onChecked: (_: number) => void;
}

const TodosList = ({ todos, onChecked }: ITabsProps) => {
    return (
        <ul className="todos-list">
            {todos.map(item => (
                <li className="todos-list__item" key={item.id}>
                    <Checkbox
                        isChecked={item.isCompleted}
                        onChecked={() => onChecked(item.id)}
                    />
                    {item.content}
                </li>
            ))}
        </ul>
    )
};

export default TodosList;