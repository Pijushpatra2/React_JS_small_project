import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Grid } from '@mui/material';
import SuperBikeDetails from './SuperBikeDetails';
import './style.css';

function SuperBike() {
  return (
    <>
      <div className='mainBikeSec'>
        <div className="bikedetils">
          <Grid container spacing={2}>
            {SuperBikeDetails.map((superbike) => (
              <Grid key={superbike.id} item xs={12} sm={6} md={4} lg={4}>
                <Card sx={{ maxWidth: 150, maxHeight: 200 }} className='card'>
                  <CardActionArea>
                    <CardMedia component="img" className='cardImages' image={superbike.imagescr} />
                    <CardContent>
                      <Typography gutterBottom variant="small">
                        {superbike.title}
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

export default SuperBike;
