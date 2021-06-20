import './App.scss';
import React, {useState, useEffect} from "react";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import queryString from 'query-string';
import PostFilterForm from "./components/PostFilterForm";
import Clock from "./components/Clock";
import BetterClock from "./components/BetterClock";

function App() {
    const [todoList, setTodoList] = useState([
        {id: 1, title: 'I love easy frontend!'},
        {id: 2, title: 'We love easy frontend!'},
        {id: 3, title: 'They love easy frontend!'},
    ]);

    const [postList, setPostList] = useState([]);

    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 5,
        _totalRows: 10,
    });

    const [filters, setFilters] = useState({
        _limit: 5,
        _page: 1,
        title_like: '',
    });

    const [showClock, setShowClock] = useState(true);

    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramsString = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                const {data, pagination} = responseJSON;
                setPostList(data);
                setPagination(pagination);
            } catch (e) {
                console.log(e.message);
            }
        }

        fetchPostList();
    }, [filters]);

    function handlePageChange(newPage) {
        setFilters({
            ...filters,
            _page: newPage
        });
    }

    function handleFilterChange(newFilters) {
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm,
        });
    }

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
            {/*<h2>React Hook useState</h2>*/}
            {/*<ColorBox/>*/}
            {/*<h2>React Hook TodoList</h2>*/}
            {/*<TodoList todos={todoList} onTodoClick={handleTodoClick}/>*/}
            {/*<h2>React Hook TodoForm</h2>*/}
            {/*<TodoForm onSubmit={handleTodoFormSubmit}/>*/}
            {/*<h2>React Hooc UseEffect</h2>*/}
            {/*<PostList posts={postList}/>*/}
            {/*<h2>Pagination</h2>*/}
            {/*<PostFilterForm onSubmit={handleFilterChange}/>*/}
            {/*<Pagination*/}
            {/*    pagination={pagination}*/}
            {/*    onPageChange={handlePageChange}*/}
            {/*/>*/}
            {showClock && <Clock />}
            {showClock && <BetterClock />}
            <button onClick={() => setShowClock(false)}>Hide CLock</button>
        </div>
    );
}

export default App;
