import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/GridLegacy";

//Icons
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

// Others
import { TodosContext } from "../contexts/TodosContext";
import { useContext, useState } from "react";

// DIALOG IMPORTS
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function ToDo({ todo, handleCheck }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [todos, setTodos] = useContext(TodosContext);

  // EVENT HANDLERS

  function handleCheckClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updatedTodos);
  }

  function handleDeleteClick() {
    setShowDeleteDialog(true);
  }
  function handleClose() {
    setShowDeleteDialog(false);
  }

  // === EVENT HANDLERS ===
  return (
    <>
      {/* DELETE DIALOG */}
      <Dialog
        style={{ direction: "rtl" }}
        onClose={handleClose}
        open={showDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          هل أنت متأكد من حذف هذه المهمة ؟
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ textAlign: "center" }}
          >
            لا يمكنك التراجع عن الحذف بعد إتمامه
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button>إغلاق</Button>
          <Button autoFocus>تأكيد الحذف</Button>
        </DialogActions>
      </Dialog>
      {/* === DELETE DIALOG === */}
      <Card
        className="todoCard"
        sx={{
          minWidth: 275,
          background: "#0f1963ff",
          color: "white",
          marginTop: 5,
        }}
      >
        <CardContent>
          <Grid container spacing={2} style={{ padding: 0, margin: 0 }}>
            <Grid item xs={8}>
              <Typography variant="h5" style={{ textAlign: "right" }}>
                {todo.title}
              </Typography>
              <Typography variant="h6" style={{ textAlign: "right" }}>
                {todo.details}
              </Typography>
            </Grid>
            {/* Actions Buttons */}
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {/* CHECK ICON BUTTON */}
              <IconButton
                onClick={() => {
                  handleCheckClick();
                }}
                className="iconButton"
                aria-label="check"
                style={{
                  color: todo.isCompleted ? "white" : "#529a00ff",
                  background: todo.isCompleted ? "#529a00ff" : "white",
                  border: "solid #529a00ff 3px",
                }}
              >
                <CheckIcon />
                {/* === CHECK ICON BUTTON === */}
              </IconButton>
              <IconButton
                className="iconButton"
                aria-label="check"
                style={{
                  color: "#3f3cffff",
                  background: "white",
                  border: "solid #3f3cffff 3px",
                }}
              >
                <ModeEditOutlineOutlinedIcon />
              </IconButton>

              {/* DELETE BUTTON */}
              <IconButton
                className="iconButton"
                aria-label="check"
                style={{
                  color: "#b30000ff",
                  background: "white",
                  border: "solid #b30000ff 3px",
                }}
                onClick={handleDeleteClick}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
              {/* === DELETE BUTTON === */}
            </Grid>
            {/* === Actions Buttons === */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
