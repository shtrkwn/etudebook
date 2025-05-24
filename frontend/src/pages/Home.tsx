import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const songs = [
  { id: '1', title: 'Song 1', thumbnail: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Song 2', thumbnail: 'https://via.placeholder.com/150' },
];

const Home: React.FC = () => (
  <Grid container spacing={2}>
    {songs.map(song => (
      <Grid item key={song.id} xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea component={Link} to={`/play/${song.id}`}>
            <CardMedia component="img" image={song.thumbnail} height="140" alt={song.title} />
            <CardContent>
              <Typography variant="subtitle1" component="div">
                {song.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default Home;
