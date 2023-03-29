import React from "react";
import { useCallback, useState, useEffect } from "react";

function TodoEdit({ selectedTodo, onUpdate }) {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onUpdate(selectedTodo.id, value);
      setValue("");
      e.preventDefault();
    },
    [onUpdate, selectedTodo, value]
  );

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div className="background">
      <form className="todoedit_insert" onSubmit={onSubmit}>
        <h2>수정하기</h2>
        <input placeholder="할 일을 입력해주세요." value={value} onChange={onChange}></input>
        <button type={"submit"}>수정하기</button>
      </form>
    </div>
  );
}

export default TodoEdit;
