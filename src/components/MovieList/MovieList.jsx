/**** SYSTEM ****/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**** COMPONENTS ****/
import MovieListItem from '../MovieListItem/MovieListItem';

/**** STYLING ****/
import { Box, Grid, Typography } from '@material-ui/core';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <Box>
           
            <Grid container className="movies" spacing={2}>
                {movies.map(movie => (
                    <MovieListItem key={movie.id} movie={movie}/>
                ))}
            </Grid>
        </Box>

    );
}

export default MovieList;