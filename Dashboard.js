import  React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import { maxHeight } from '@mui/system';

export default function ImgMediaCard() {

const[dataa,setDataa] = useState([]);
const[dabled,setDisabled] = useState(false);

    const fetchApi=()=>{
        fetch(' https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json')
        .then(res=>res.json())
        .then((data)=>{
            
            console.log(data)
            setDataa(data);
        })
    }

    useEffect(()=>{
        fetchApi()
    },[])
    
    const handleClick = event =>{
        setDisabled=true;
    }

  return (
    <div>
    <Card sx={{ maxWidth: 345 ,maxHeight:500}} style={{float:'left' ,justifyContent:'space-evely', margin:'20px'}} >
      <CardMedia
      key='1'
        component="img"
        alt="green iguana"
        height="200"
        image="https://loremflickr.com/300/300/food"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lasagne
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Breaded fried chicken with waffles, and a side of maple syrup
        </Typography>
      </CardContent>
      <CardActions>
        
        <select >
        
            <option disabled={dabled} onClick={handleClick}>Rank 1</option>
            <option onClick={handleClick}>Rank 2</option>
            <option onClick={handleClick}>Rank 3</option>
           
        </select>
        {/* if(isOptionDisabled={(option) => option.disabled}){
                {disabled:true}
            } */}
        <Button size="small">UnVote</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 ,maxHeight:500}} style={{float:'center' ,justifyContent:'space-evely', margin:'20px'}} >
      <CardMedia
      key='2'
        component="img"
        alt="green iguana"
        height="200"
        image="https://loremflickr.com/300/300/food"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Scotch Eggs
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Thick slices of French toast bread, brown sugar, half-and-half and vanilla, topped with powdered sugar. With two eggs served any style,
         and your choice of smoked bacon or smoked ham.
        </Typography>
      </CardContent>
      <CardActions>
        
        <select isOptionDisabled={(option) => option.disabled}>
            <option onClick={handleClick}>Rank 1</option>
            <option onClick={handleClick}>Rank 2</option>
            <option onClick={handleClick}>Rank 3</option>
        </select>
        <Button size="small">UnVote</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 ,maxHeight:500}} style={{justifyContent:'space-evely', margin:'20px'}} >
      <CardMedia
      key='3'
        component="img"
        alt="green iguana"
        height="200"
        image="https://loremflickr.com/300/300/food"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Sushi
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Fresh Norwegian salmon, lightly brushed with our herbed Dijon mustard sauce,
         with choice of two sides.
        </Typography>
      </CardContent>
      <CardActions>
        
        <select isOptionDisabled={(option) => option.disabled}>
            <option onClick={handleClick}>Rank 1</option>
            <option >Rank 2</option>
            <option>Rank 3</option>
        </select>
        <Button size="small">UnVote</Button>
      </CardActions>
    </Card>
    {dataa.map((val)=>{
        return(
            <div>
    <Card sx={{ maxWidth: 345 ,maxHeight:500}} style={{float:'left' ,justifyContent:'space-evely', margin:'90px'}} >
      <CardMedia
      key={val.id}
        component="img"
        alt="dish"
        height="300"
        image={val.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.dishName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size='small'>Like</Button>
        <Button size="small">DisLike</Button>
      </CardActions>
    </Card>
            </div>
        )
    })}
    
    </div>
  );
}
