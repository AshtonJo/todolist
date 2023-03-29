import React from "react";
import "./TodoListItem.css";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdModeEditOutline, MdRemoveCircleOutline } from "react-icons/md";
import classNames from "classnames";

function TodoListItem({ todo, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle }) {
  const { id, text, checked } = todo;

  return (
    <li className="TodoListItem">
      <div className={classNames("content", { checked: checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div
        className="edit"
        onClick={() => {
          onChangeSelectedTodo(todo);
          onInsertToggle();
        }}
      >
        <MdModeEditOutline />
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </li>
  );
}

export default TodoListItem;
