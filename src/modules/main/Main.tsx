import Todos from "@/common/components/todos/Todos";
import "@/modules/main/style.scss";

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <h1 className="main__title">todos</h1>
                <Todos />
            </div>
        </main>
    )
};

export default Main;