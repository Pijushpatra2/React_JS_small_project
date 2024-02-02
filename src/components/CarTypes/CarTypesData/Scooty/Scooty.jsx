import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Grid } from '@mui/material';
import ScootyData from './ScootyData';
import './style.css';

function Scooty() {
  return (
    <>
      <div className='mainBikeSec'>
        <div className="bikedetils">
          <Grid container spacing={2}>
            {ScootyData.map((scooter) => (
              <Grid key={scooter.id} item xs={12} sm={6} md={4} lg={4}>
                <Card sx={{ maxWidth: 150, maxHeight: 200 }} className='card'>
                  <CardActionArea>
                    <CardMedia component="img" className='cardImages' image={scooter.imagescr} />
                    <CardContent>
                      <Typography gutterBottom variant="small">
                        {scooter.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Scooty;
