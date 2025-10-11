import "./App.css";
import ToDoList from "./components/ToDoList";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Alexandria",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#1e1e2f",
          direction: "rtl",
        }}
      >
        <ToDoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
