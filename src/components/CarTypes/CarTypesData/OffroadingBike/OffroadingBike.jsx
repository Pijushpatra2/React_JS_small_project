import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Grid } from '@mui/material';
import Offroading from './Offroading_bikeData';
import './style.css';

function OffroadingBike() {
  return (
    <>
      <div className='mainBikeSec'>
        <div className="bikedetils">
          <Grid container spacing={2}>
            {Offroading.map((offroading) => (
              <Grid key={offroading.id} item xs={12} sm={6} md={4} lg={4}>
                <Card sx={{ maxWidth: 150, maxHeight: 200 }} className='card'>
                  <CardActionArea>
                    <CardMedia component="img" className='cardImages' image={offroading.imagescr} />
                    <CardContent>
                      <Typography gutterBottom variant="small">
                        {offroading.title}
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

export default OffroadingBike;
