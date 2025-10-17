import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/GridLegacy";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// Components
import ToDo from "./ToDo";

// OTHERS
import { TodosContext } from "../contexts/TodosContext";
import { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  const [todos, setTodos] = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");

  // Filteration arrays
  const completedTodos = todos.filter((t) => {
    return t.isCompleted;
  });

  const notCompletedTodos = todos.filter((t) => {
    return !t.isCompleted;
  });

  let todosToBeRendered = todos;
  if (displayedTodosType == "completed") {
    todosToBeRendered = completedTodos;
  } else if (displayedTodosType == "none-completed") {
    todosToBeRendered = notCompletedTodos;
  } else {
    todosToBeRendered = todos;
  }

  const todosJsx = todosToBeRendered.map((t) => {
    return <ToDo key={t.id} todo={t} />;
  });

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    if (storageTodos) {
      setTodos(storageTodos);
    } else {
      setTodos([]);
    }
  }, []);

  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTitleInput("");
  }
  function changeDisplayedType(e) {
    setDisplayedTodosType(e.target.value);
  }

  return (
    <Container maxWidth="sm">
      <Card
        sx={{ minWidth: 275 }}
        style={{
          maxHeight: "80vh",
          overflow: "scroll",
        }}
      >
        <CardContent>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            مهامي
            <Divider />
            {/* Filter Buttons */}
            <ToggleButtonGroup
              value={displayedTodosType}
              exclusive
              onChange={changeDisplayedType}
              aria-label="text alignment"
              color="primary"
              style={{ direction: "ltr" }}
            >
              <ToggleButton value="none-completed">غير المنجز</ToggleButton>
              <ToggleButton value="completed">المنجز</ToggleButton>
              <ToggleButton value="all">الكل</ToggleButton>
            </ToggleButtonGroup>
            {/* ===Filter Buttons=== */}
            {/* ALL ToDos */}
            {todosJsx}
            {/* === ALL ToDos === */}
            {/* Input + Add Button */}
            <Grid container spacing={2} style={{ marginTop: "20px" }}>
              <Grid
                item
                xs={8}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="عنوان المهمة"
                  variant="outlined"
                  value={titleInput}
                  onChange={(e) => {
                    setTitleInput(e.target.value);
                  }}
                />
              </Grid>

              <Grid
                item
                xs={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  style={{ width: "100%", height: "100%" }}
                  variant="contained"
                  onClick={() => {
                    handleAddClick();
                  }}
                  disabled={titleInput.length === 0}
                >
                  إضافة
                </Button>
              </Grid>
            </Grid>
            {/* === Input + Add Button === */}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
