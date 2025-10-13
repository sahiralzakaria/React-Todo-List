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
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const initialTodos = [
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "sssssssssssssssssssssssss",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "رياضة",
    details: "ddddddddddddddddddddddddd",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Conding",
    details: "fdgdfgdfhddhdfh",
    isCompleted: false,
  },
];
export default function ToDoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [titleInput, setTitleInput] = useState("");

  function handleCheckClick(todoID) {
    const updatedTodos = todos.map((t) => {
      if (t.id === todoID) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updatedTodos);
  }

  const todosJsx = todos.map((t) => {
    return <ToDo key={t.id} todo={t} handleCheck={handleCheckClick} />;
  });
  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setTitleInput("");
  }
  return (
    <Container maxWidth="md">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            مهامي
            <Divider />
            {/* Filter Buttons */}
            <ToggleButtonGroup
              // value={alignment}
              exclusive
              // onChange={handleAlignment}
              aria-label="text alignment"
              style={{ direction: "ltr" }}
            >
              <ToggleButton value="left">الكل</ToggleButton>
              <ToggleButton value="center">المنجز</ToggleButton>
              <ToggleButton value="right">غير المنجز</ToggleButton>
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
