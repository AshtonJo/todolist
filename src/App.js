import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import TodoEdit from "./components/TodoEdit";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 공부 하기",
      checked: true,
    },
    {
      id: 2,
      text: "졸업 작품 끝내기",
      checked: false,
    },
    {
      id: 3,
      text: "할일 포폴 끝내기",
      checked: true,
    },
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current++;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback(
    (id) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
    },
    [todos]
  );

  const [insertToggle, setInsertToggle] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };
  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onUpdate = (id, text) => {
    onInsertToggle();

    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
      {insertToggle && <TodoEdit selectedTodo={selectedTodo} onUpdate={onUpdate} />}
    </TodoTemplate>
  );
}

export default App;
