import * as React from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { ProductContext } from '../component/productContext/ProductContext';
const Home = () => {

  const {products} = useContext(ProductContext)
  
  return (
    <div className="home" style={{margin:'100px 150px' ,display:'flex' ,flexWrap:'wrap',gap:'50px'}}>
    {products[0]?.map((product) => (
      
      <div className="product-item" key={product.id}>
        <Card sx={{ maxWidth: 345,height:700}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={"400px"}
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    ))}
  </div>
);
};

export default Home