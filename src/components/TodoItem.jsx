
function TodoItem({ title, id, removeTodo }) {

    return (
        <li>
            <label htmlFor="">
                {id}
                {title}
            </label>
            <span style={{ color: "red", cursor: "pointer" }} 
            onClick={()=>{removeTodo(id)}}>
                X
            </span>
        </li>
    );
}
export default TodoItem;
