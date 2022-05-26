import React from "react";
import styled from "styled-components";
const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    border-bottom: ${(props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5))
        ? "none"
        : "2px solid red")};
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;
const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;
const CompletedButtonStyled = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
    background-color: #22ee22;
`;
const RemoveButtonStyled = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
    background-color: #ee2222;
    margin-left: 8px;
`;
const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    return (
        <TodoItemContainer>
            <h3>{todo.text}</h3>
            <p>
                Created at:&nbsp;
                {(new Date(todo.createdAt)).toLocaleDateString()}
            </p>
            <ButtonsContainer>
                <CompletedButtonStyled
                    onClick={() => onCompletedPressed(todo.id)}>
                    Mark As Completed
                </CompletedButtonStyled>
                <RemoveButtonStyled
                    onClick={() => onRemovePressed(todo.id)}>
                    Remove
                </RemoveButtonStyled>
            </ButtonsContainer>
        </TodoItemContainer>
    );
}
export default TodoListItem;