import { createSlice } from "@reduxjs/toolkit";
// import {
//   addTodo,
//   deleteTodo,
//   editTodo,
//   todoFinished,
// } from "../actions/todoActions";
const initialState = {
  TodoList: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (todo, action) => {
      let todoText = action.payload?.todoText || "";
      todo.TodoList.push({
        id: todo.TodoList.length + 1,
        todoData: todoText,
        finished: false,
      });
    },
    editTodo: (todo, action) => {
      let payloadTodo = action.payload.todo;
      let todoText = action.payload.todoText;
      todo.TodoList = todo.TodoList.map((t) =>
        t.id === payloadTodo.id ? { ...t, todoData: todoText } : t
      );

      // todo.TodoList = todo.TodoList.map((t) => {
      //   if ((t.id = payloadTodo.id)) {
      //     t.todoData = todoText;
      //   }
      //   return t;
      // });
    },
    todoFinished: (todo, action) => {
      let payloadTodo = action.payload.todo;
      let isFinished = action.payload.isFinished;
      todo.TodoList = todo.TodoList.map((t) =>
        t.id === payloadTodo.id ? { ...t, finished: isFinished } : t
      );

      // todo.TodoList = todo.TodoList.map((t) => {
      //   if ((t.id = payloadTodo.id)) {
      //     todo.finished = isFinished;
      //   }
      //   return t;
      // });
    },
    deleteTodo: (todo, action) => {
      let payloadTodo = action.payload.todo;
      todo.TodoList = todo.TodoList.filter((t) => t.id !== payloadTodo.id);
    },
  },
});

export const { deleteTodo, addTodo, editTodo, todoFinished } =
  todoSlice.actions;

export default todoSlice.reducer;
