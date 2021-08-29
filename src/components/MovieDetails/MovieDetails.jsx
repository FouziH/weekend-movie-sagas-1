/**** SYSTEM ****/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

/**** STYLING ****/
import { makeStyles } from '@material-ui/core/styles';
import { Box,Grid, Paper, Typography } from '@material-ui/core';
//import { Delete } from '@material-ui/icons'; // Reminder to add this

const useStyles = makeStyles({
    thumb: {
        padding: 20,
        textAlign: 'center',
    },
    info: {
        padding: 20,
        textAlign: 'left',
    },

});

const MovieDetails = ({id, title}) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    

    useEffect(() => {
        //Get movie details
        dispatch({
            type: 'FETCH_SINGLE_MOVIE',
            payload: id
        });
        
    }, [id])

    // Grab movie that was fetched by dispatch
    const movie = useSelector(store => store.movie);
    const [header, setHeader] = useState(
        <Typography 
            variant="h3" 
            align="center" 
            gutterBottom
        >
            {title}
        </Typography>
    );
   

    return (
        <Paper
        style={{
            padding: 20,
        }}
        elevation={12}
        >
            {header}
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <Box className={classes.thumb} >
                    <img 
                        src={movie.poster} 
                        alt={movie.title}
                    />
                    {movie.genres?.map((genre, index) => (
                        <Typography key={index} variant="subtitle2">{genre}</Typography>
                    ))}
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
                <Box
                    
                >
                    <Typography noWrap variant="h5" gutterBottom>
                        {movie.title}
                    </Typography>
                    <Typography className={classes.info}>
                        {movie.description}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
        </Paper>
        
    ) // End MovieDetails return

} // End MovieDetails()

export default MovieDetails;
