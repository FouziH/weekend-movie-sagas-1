/**** SYSTEM ****/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**** COMPONENTS ****/

/**** STYLING ****/
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        backgroundColor: 'red',
    },
});

//{match:{params:{name}}} was vital/imporant/nessasary research
// I wanted this kind of routing for bookmarks, and independant operation.
// It is not dependant on another page to source the ID, just the url(route)
// in my experance - advanced users demand this. they will often remember the id
// and go directly to the url.

const Details = ({match:{params:{id}}}) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'FETCH_SINGLE_MOVIE',
            payload: id
        })
    }, [id])

    const movie = useSelector(store => store.movie);
    console.log("movie",movie);
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Paper
                    style={{
                        padding: 20,
                        textAlign: 'center'
                    }}
                >
                    <img 
                        src={movie.poster} 
                        alt={movie.title}

                    />
                </Paper>
            </Grid>
            <Grid item>
                <Paper
                    style={{
                        padding: 20,
                        textAlign: 'center'
                    }}
                    elevation={12}
                >
                    <Typography
                        component="h1"
                    >
                        {movie.title}
                    </Typography>
                    <Typography component="body1">
                        {movie.description}
                    </Typography>
                    
                    
                    {movie.genres?.map((genre, index) => (
                        <p key={index}>{genre}</p>
                    ))}
                </Paper>
            </Grid>
        </Grid>
        
    )
}

export default Details;
