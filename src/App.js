import "./App.css";
import ToDoList from "./components/ToDoList";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { TodosContext } from "./contexts/TodosContext";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
const theme = createTheme({
  typography: {
    fontFamily: "Alexandria",
  },

  palette: {
    primary: {
      main: "#004d40",
    },
  },
});

const initialTodos = [];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          height: "100vh",
          background: "#1e1e2f",
          direction: "rtl",

          display: "flex",
          alignItems: "center",
        }}
      >
        <TodosContext.Provider value={[todos, setTodos]}>
          <ToDoList />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
