import React from "react";
import "./TodoListItem.css"
const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    return (
        <div className="todo-item-container">
            <div className="todo-text-container">
                <h3>{todo.text}</h3>
            </div>
            <div>
                <div className="buttons-container">
                    {todo.isCompleted ? null :
                        <button
                            onClick={() => onCompletedPressed(todo.id)}
                            className="completed-button">
                            Mark As Completed
                        </button>}
                    <button
                        onClick={() => onRemovePressed(todo.id)}
                        className="remove-button">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
export default TodoListItem;