import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/GridLegacy';

//Icons
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';


export default function ToDo(){
    return (<>
    <Card sx={{ minWidth: 275 , background:"#0f1963ff" , color:"white" , marginTop:5 }}>
      <CardContent >
        <Grid container spacing={2} style={{padding:0 ,  margin:0 }} >
          <Grid item xs={8} >
              <Typography variant='h5' style={{textAlign:"right"}}>المهمة الأولى</Typography>
          </Grid>
          {/* Actions Buttons */}
          <Grid  xs={4} display="flex" justifyContent="space-around" alignItems="center"> 
            <IconButton aria-label="check" style={{color:"#529a00ff" , background:"white" , border:"solid #529a00ff 3px"}}  >
            <CheckIcon  />
          </IconButton>
            <IconButton aria-label="check" style={{color:"#3f3cffff" , background:"white" , border:"solid #3f3cffff 3px"}}  >
            <ModeEditOutlineOutlinedIcon  />
          </IconButton>
            <IconButton aria-label="check" style={{color:"#b30000ff" , background:"white" , border:"solid #b30000ff 3px"}}  >
            <DeleteOutlineOutlinedIcon  />
          </IconButton>
          </Grid>
          {/* === Actions Buttons === */}
      </Grid>
      </CardContent>
    </Card>
    </>);
}