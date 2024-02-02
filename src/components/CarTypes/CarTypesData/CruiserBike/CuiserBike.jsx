import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Grid } from '@mui/material';

import './style.css';
import CruiserBikeData from './CruiserBikeData';

function CruiserBike() {
  return (
    <>
      <div className='mainBikeSec'>
        <div className="bikedetils">
          <Grid container spacing={2}>
            {CruiserBikeData.map((curiser) => (
              <Grid key={curiser.id} item xs={12} sm={6} md={4} lg={4}>
                <Card sx={{ maxWidth: 150, maxHeight: 200 }} className='card'>
                  <CardActionArea>
                    <CardMedia component="img" className='cardImages' image={curiser.imagescr} />
                    <CardContent>
                      <Typography gutterBottom variant="small">
                        {curiser.title}
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

export default CruiserBike;
