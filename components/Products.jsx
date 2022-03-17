import { data } from "../db/data";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const Product = () => {
   
    return <Box sx={{ flexGrow: 1, paddingLeft: '50px' }}>
          <Typography gutterBottom variant="h5" component="h5">
          Products
        </Typography>
      <Grid container spacing={2}>
          {data.map((product)=> (
             <Grid key={product.id} item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Rating name="rating" defaultValue={product.rate} precision={product.rate} />
        </Typography>
      </CardContent>
    </Card>
           </Grid>
          ))}
      </Grid>
    </Box>
   
}
 
export default Product;

