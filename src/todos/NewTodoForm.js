import React, { useState } from "react";
import { connect } from "react-redux";
import { getTodos } from "./selectors";
import { addTodoRequest } from "./thunks";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState("");
    const createTodo = () => {
        const isDuplicateText = todos.some(todo => todo.text === inputValue);
        if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
        }
    }
    return (
        <div className="new-todo-form">
            <input
                onKeyPress={(ev) =>
                    ev.key === "Enter" ?
                        createTodo() :
                        null
                }
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo item here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button
                onClick={createTodo}
                className="new-todo-button">
                Create Todo
            </button>
        </div>
    );
}

const mapStateToProps = state => ({
    todos: getTodos(state)
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);