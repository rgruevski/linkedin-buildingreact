
import { createSelector } from "reselect";

export const getTodos = state => state?.todos?.data ?? [];
export const getTodosLoading = state => state?.todos?.isLoading ?? false;

export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => (todos?.filter(todo => !todo?.isCompleted ?? 0) ?? []),
);

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => (todos?.filter(todo => todo?.isCompleted ?? 0) ?? []),
); 