/**** SYSTEM ****/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

/**** COMPONENTS ****/

/**** STYLING ****/
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
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

const Details = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    let { id } = useParams(); // originally used {match:{params:{id}}} until I found this.

    useEffect(() => {
        //Get movie details
        dispatch({
            type: 'FETCH_SINGLE_MOVIE',
            payload: id
        });
        //Set current page on
        dispatch({
            type: 'SET_PAGE',
            payload: 'details'
        })
    }, [id])

    // Grab movie that was fetched by dispatch
    const movie = useSelector(store => store.movie);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <Paper className={classes.thumb} >
                    <img 
                        src={movie.poster} 
                        alt={movie.title}
                    />
                    {movie.genres?.map((genre, index) => (
                        <Typography key={index} variant="subtitle2">{genre}</Typography>
                    ))}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
                <Paper
                    style={{
                        padding: 20,
                    }}
                    elevation={12}
                >
                    <Typography noWrap variant="h5" gutterBottom>
                        {movie.title}
                    </Typography>
                    <Typography className={classes.info}>
                        {movie.description}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
        
    ) // End Details return

} // End Details()

export default Details;
