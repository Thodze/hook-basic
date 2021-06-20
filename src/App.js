import './App.scss';
import React, {useState} from "react";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
    const [todoList, setTodoList] = useState([
        {id: 1, title: 'I love easy frontend!'},
        {id: 2, title: 'We love easy frontend!'},
        {id: 3, title: 'They love easy frontend!'},
    ]);

    function handleTodoClick(todo) {
        const index = todoList.findIndex(x => x.id === todo.id);
        if (index < 0) return;
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    function handleTodoFormSubmit(formValues) {
        const newTodo = {
            id: todoList.length + 1,
            ...formValues
        };
        const newTodoLists = [...todoList];
        newTodoLists.push(newTodo);
        setTodoList(newTodoLists);
    }

    return (
        <div className="app">
            <h2>React Hook useState</h2>
            <ColorBox/>
            <h2>React Hook TodoList</h2>
            <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
            <h2>React Hook TodoForm</h2>
            <TodoForm onSubmit={handleTodoFormSubmit}/>
        </div>
    );
}

export default App;
