import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToDoList() {
  return (
      <Container maxWidth="sm">
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h2'>
          مهامي
          <Divider/>
          {/* Filter Buttons */}
          <ToggleButtonGroup
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
            style={{direction:"ltr" }}
        >
      <ToggleButton value="left" >
        الكل
      </ToggleButton>
      <ToggleButton value="center" >
        المنجز
      </ToggleButton>
      <ToggleButton value="right" >
        غير المنجز
      </ToggleButton>

    </ToggleButtonGroup>
          {/* ===Filter Button=== */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Container>
  );
}