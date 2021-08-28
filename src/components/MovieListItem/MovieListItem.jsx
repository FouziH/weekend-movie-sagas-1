/**** SYSTEM ****/
import React from 'react';
import { useHistory } from 'react-router-dom';
/**** COMPONENTS ****/

/**** STYLING ****/
import { Grid, Typography, Paper } from '@material-ui/core';

const MovieListItem = ({ movie }) => {
    const history = useHistory();
    return (
        <Grid item xs={4}>
            <Paper style={{
                padding: 2,
                textAlign: 'center'
            }}>
                <Typography component="h3">{movie.title}</Typography>
                <img 
                    src={movie.poster} 
                    alt={movie.title}
                    onClick={ () => history.push(`/details/${movie.id}`)}
                /><br/>
            </Paper>
        </Grid>
    )
}

export default MovieListItem;
