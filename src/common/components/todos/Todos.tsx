import { useEffect, useState } from "react";
import { ITodo } from "@/common/interfaces/todos";
import { getTodos } from "@/common/utils/getTodos";
import { setTodos as setTodosLs } from "@/common/utils/setTodods";
import { TTab } from "@/common/interfaces/tab";
import { filterTodos } from "@/common/utils/filterTodos";
import TodosList from "@/common/components/todosList/TodosList";
import TabButtons from "@/common/components/tabButtons/TabButtons";
import { countRemaining } from "@/common/utils/countRemaining";
import "@/common/components/todos/style.scss";
import TodoCreator from "@/common/components/todoCreator/TodoCreator";

const Todos = () => {
    const [selctedTab, setSelectedTab] = useState<TTab>("All");
    const [todos, setTodos] = useState<ITodo[]>(getTodos("All"));

    const addNewTodo = (content: string) => {
        const newTodo: ITodo = {
            id: Date.now(),
            content,
            isCompleted: false,
        }
        setTodos([newTodo, ...todos]);
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

    const handleClear = () => {
        const updatedTodos = todos.filter(item => {
            if (!item.isCompleted) {
                return item;
            }
        });

        setTodos(updatedTodos);
    };

    return (
        <div className="todos__wrapper">
            <TodoCreator onAddNewTodo={addNewTodo}/>

            <div className="todos__content">
                <TodosList
                    todos={filterTodos(todos, selctedTab)}
                    onChecked={handleChecked}
                />

                <div className="todos__footer">
                    <p className="todos__count">{countRemaining(todos)} items left</p>

                    <TabButtons onSelect={setSelectedTab} selectedTab={selctedTab} />

                    <button className="todos__clear-btn" onClick={handleClear}>
                        Clear completed
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Todos;