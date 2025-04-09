import Input from "@/common/ui/input/Input";
import "@/common/components/todoCreator/style.scss";
import Checkbox from "@/common/ui/checkbox/Checkbox";

const TodoCreator = () => {
    return (
        <div className="todos__wrapper">
            <div className="todos__creator">
                <Input placeholder="What needs to be done?" />
            </div>
            <div className="todos__content">
                <ul className="todos__list">
                    <li className="todos__list-item">
                        <Checkbox />
                        Доделать ТОДО
                    </li>
                    <li className="todos__list-item">
                        <Checkbox />
                        Погулять
                    </li>
                    <li className="todos__list-item">
                        <Checkbox isChecked={true}/>
                        Посмотреть курс
                    </li>
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