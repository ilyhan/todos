import TodoCreator from "@/common/components/todoCreator/TodoCreator";
import "@/modules/main/style.scss";

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <h1 className="main__title">todos</h1>
                <TodoCreator />
            </div>
        </main>
    )
};

export default Main;