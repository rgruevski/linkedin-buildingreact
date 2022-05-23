import React from "react";
const TodoListItem = ({ todo }) => {
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div>
            <div><button className="completed-button">Mark As Completed</button></div>
            <div><button className="remove-button">Remove</button></div>
        </div>
    </div>
}
export default TodoListItem;