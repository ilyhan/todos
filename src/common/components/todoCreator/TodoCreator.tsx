import Input from "@/common/ui/input/Input";
import { useState } from "react";
import "@/common/components/todoCreator/style.scss";
interface ITodoCreatorProps {
    onAddNewTodo: (_: string) => void;
};

const TodoCreator = ({ onAddNewTodo }: ITodoCreatorProps) => {
    const [value, setValue] = useState('');

    const handleAddTodo = () => {
        if (value.trim()) {
            onAddNewTodo(value);
            setValue('');
        }
    };

    return (
        <div className="creator">
            <button
                className="creator__button"
                onClick={handleAddTodo}
                title="Add todo"
            >
                +
            </button>

            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="What needs to be done?"
            />
        </div>
    )
};

export default TodoCreator;