import { useState } from "react";
import { useDispatch } from "react-redux";
function AddTodo() {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="add your next todo.."
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add_todo", payload: { todoText: inputText } });
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}
export default AddTodo;
