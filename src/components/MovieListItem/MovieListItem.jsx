/**** SYSTEM ****/
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/**** STYLING ****/
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const MovieListItem = ({ movie }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = (id) => {
        if (confirm("Deleting movie")){
            dispatch({ type: 'DELETE_MOVIE', payload: id});
        }
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper 
                style={{
                    padding: 20,
                    textAlign: 'center'
                }}
                elevation={12}
            >
                <Typography 
                    noWrap 
                    component="h3" 
                    gutterBottom
                >
                    {movie.title}
                </Typography>
                <img 
                    src={movie.poster} 
                    alt={movie.title}
                    onClick={ () => history.push(`/details/${movie.id}`)}
                    style={{ height: 250,}}
                />
                <br />{/*temp for temp delete placement */}
                <Button 
                    startIcon={<DeleteIcon/>} 
                    variant="contained" 
                    color="secondary"
                    onClick={() => handleDelete(movie.id)}
                >
                    Delete
                </Button>
            </Paper>
        </Grid>
    ) // End MovieListItem return

} // End MovieListItem()

export default MovieListItem;
