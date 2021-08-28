/**** SYSTEM ****/
import React from 'react';
import { useHistory } from 'react-router-dom';
/**** COMPONENTS ****/

/**** STYLING ****/
import { Grid, Typography, Paper } from '@material-ui/core';

const MovieListItem = ({ movie }) => {
    const history = useHistory();
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper 
                style={{
                    padding: 20,
                    textAlign: 'center'
                }}
                elevation={12}
            >
                <Typography noWrap component="h3" gutterBottom>{movie.title}</Typography>
                <img 
                    src={movie.poster} 
                    alt={movie.title}
                    onClick={ () => history.push(`/details/${movie.id}`)}
                    style={{ height: 250,}}
                /><br/>
            </Paper>
        </Grid>
    )
}

export default MovieListItem;
