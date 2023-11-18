import TodoItem from "./TodoItem"

function TodoList({ todos, removeTodo }) {
    return (
        <>
            <ul>
                {todos.map((todo,ind) =>(
                    <TodoItem key={Math.random()} {...todo}  removeTodo={removeTodo}/>
                ))}
            </ul>
        </>
    )
}
export default TodoList
