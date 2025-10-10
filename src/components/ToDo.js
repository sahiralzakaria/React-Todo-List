import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function ToDo(){
    return (<>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h2'>المهمة الأولى</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>);
}