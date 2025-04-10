import Input from "@/common/ui/input/Input";
import "@/common/components/todoCreator/style.scss";
import Checkbox from "@/common/ui/checkbox/Checkbox";
import { useEffect, useState } from "react";
import { ITodo } from "@/common/interfaces/todos";
import { getTodos } from "@/common/utils/getTodos";
import { setTodos as setTodosLs } from "@/common/utils/setTodods";

const TodoCreator = () => {
    const [todos, setTodos] = useState<ITodo[]>(getTodos);
    const [value, setValue] = useState('');

    const addNewTodo = () => {
        if (value.trim()) {
            const newTodo: ITodo = {
                id: Date.now(),
                content: value,
                isCompleted: false,
            }
            setTodos([newTodo, ...todos]);
            setValue('');
        }
    }

    useEffect(() => {
        setTodosLs(todos);
    }, [todos]);

    const handleChecked = (id: number) => {
        const updatedTodos = todos.map(item => {
            if (item.id == id) {
                return { ...item, isCompleted: !item.isCompleted };
            }
            return item;
        });

        setTodos(updatedTodos);
    };

    return (
        <div className="todos__wrapper">
            <div className="todos__creator">
                <button className="todos__create-btn" onClick={addNewTodo}>
                    +
                </button>

                <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="What needs to be done?"
                />
            </div>

            <div className="todos__content">
                <ul className="todos__list">
                    {todos.map(item => (
                        <li className="todos__list-item" key={item.id}>
                            <Checkbox isChecked={item.isCompleted} onChecked={() => handleChecked(item.id)} />
                            {item.content}
                        </li>
                    ))}
                </ul>

                <div className="todos__footer">
                    <p className="todos__count">2 items left</p>

                    <div className="todos__tabs">
                        <button className="todos__tab-btn">
                            All
                        </button>

                        <button className="todos__tab-btn">
                            Active
                        </button>

                        <button className="todos__tab-btn">
                            Completed
                        </button>
                    </div>

                    <button className="todos__clear-btn">
                        Clear completed
                    </button>
                </div>
            </div>
        </div>
    )
};

export default TodoCreator;