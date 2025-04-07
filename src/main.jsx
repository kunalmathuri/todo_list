import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TodoContext from "./components/context/TodoContext.js";

createRoot(document.getElementById("root")).render(
  <TodoContext.Provider>
    <App />
  </TodoContext.Provider>
);
