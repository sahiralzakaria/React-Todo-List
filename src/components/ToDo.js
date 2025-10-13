import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/GridLegacy";

//Icons
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

export default function ToDo({ todo, handleCheck }) {
  function handleCheckClick() {
    handleCheck(todo.id);
  }
  return (
    <>
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
              <IconButton
                className="iconButton"
                aria-label="check"
                style={{
                  color: "#b30000ff",
                  background: "white",
                  border: "solid #b30000ff 3px",
                }}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Grid>
            {/* === Actions Buttons === */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
