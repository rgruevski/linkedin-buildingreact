import React from "react";
import "./TodoListItem.css"
const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div>
                <div className="buttons-container">
                    {todo.isCompleted ? null :
                        <button
                            onClick={() => onCompletedPressed(todo.text)}
                            className="completed-button">
                            Mark As Completed
                        </button>}
                </div>
                <div>
                    <button
                        onClick={() => onRemovePressed(todo.text)}
                        className="remove-button">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
export default TodoListItem;