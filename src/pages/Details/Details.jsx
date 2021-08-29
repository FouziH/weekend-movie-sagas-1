/**** SYSTEM ****/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

/**** COMPONENTS ****/

/**** STYLING ****/
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons'; //Reminder to add this

const useStyles = makeStyles({
    
});

//{match:{params:{name}}} was vital/imporant/nessasary research
// I wanted this kind of routing for bookmarks, and independant operation.
// It is not dependant on another page to source the ID, just the url(route)
// in my experance - advanced users demand this. they will often remember the id
// and go directly to the url. //{match:{params:{id}}}

const Details = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    let { id } = useParams();
    useEffect(() => {
        dispatch({
            type: 'FETCH_SINGLE_MOVIE',
            payload: id
        });
        dispatch({
            type: 'SET_PAGE',
            payload: 'details'
        })
    }, [id])

    const movie = useSelector(store => store.movie);
    console.log("movie",movie);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
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
                    <Typography noWrap variant="h5" gutterBottom>{movie.title}</Typography>
                    <Typography 
                        gutterBottom
                        style={{
                            padding: 20,
                            textAlign: 'left'
                        }}
                    >
                        {movie.description}
                    </Typography>
                    
                </Paper>
            </Grid>
        </Grid>
        
    )
}

export default Details;
